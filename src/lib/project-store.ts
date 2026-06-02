import { BlobNotFoundError, head, put } from '@vercel/blob';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

import { projects as seedProjects } from '@data/projects';
import type { Locale, Project, ProjectCopy } from '@data/types';

const PROJECTS_BLOB_PATH = 'content/projects.json';
const LOCAL_PROJECTS_PATH = join(process.cwd(), '.admin-data', 'projects.json');
const LOCAL_UPLOADS_ROOT = join(process.cwd(), 'public', 'uploads', 'projects');

export type ManagedProject = Project & {
  active: boolean;
  createdAt: string;
  updatedAt: string;
};

type ProjectPayload = {
  originalSlug?: string;
  project: ManagedProject;
};

function nowIso() {
  return new Date().toISOString();
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function normalizeCopy(copy: Partial<ProjectCopy> | undefined): ProjectCopy {
  return {
    title: copy?.title?.trim() || '',
    category: copy?.category?.trim() || '',
    description: copy?.description?.trim() || '',
    fullDescription: copy?.fullDescription?.trim() || '',
    objective: copy?.objective?.trim() || '',
    process: copy?.process?.trim() || ''
  };
}

function normalizeProject(project: Project | ManagedProject): ManagedProject {
  const managed = project as Partial<ManagedProject>;
  return {
    slug: project.slug.trim(),
    active: project.active ?? true,
    year: project.year?.trim() || undefined,
    client: project.client?.trim() || undefined,
    cover: project.cover?.trim() || undefined,
    gallery: project.gallery.map((item) => item.trim()).filter(Boolean),
    externalLink: project.externalLink?.trim() || undefined,
    featured: Boolean(project.featured),
    tools: project.tools.map((item) => item.trim()).filter(Boolean),
    copy: {
      pt: normalizeCopy(project.copy.pt),
      en: normalizeCopy(project.copy.en)
    },
    createdAt: managed.createdAt || nowIso(),
    updatedAt: managed.updatedAt || managed.createdAt || nowIso()
  };
}

function getSeededProjects() {
  const timestamp = nowIso();
  return clone(seedProjects).map((project) => ({
    ...normalizeProject(project),
    createdAt: timestamp,
    updatedAt: timestamp
  }));
}

function isBlobConfigured() {
  return Boolean(import.meta.env.BLOB_READ_WRITE_TOKEN);
}

async function readBlobProjects() {
  try {
    const meta = await head(PROJECTS_BLOB_PATH);
    const response = await fetch(meta.url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Failed to download project store (${response.status})`);
    const parsed = (await response.json()) as ManagedProject[];
    return parsed.map(normalizeProject);
  } catch (error) {
    if (error instanceof BlobNotFoundError) return null;
    throw error;
  }
}

async function writeBlobProjects(projects: ManagedProject[]) {
  await put(PROJECTS_BLOB_PATH, JSON.stringify(projects, null, 2), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 60
  });
}

async function readLocalProjects() {
  try {
    const content = await readFile(LOCAL_PROJECTS_PATH, 'utf-8');
    const parsed = JSON.parse(content) as ManagedProject[];
    return parsed.map(normalizeProject);
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return null;
    throw error;
  }
}

async function writeLocalProjects(projects: ManagedProject[]) {
  await mkdir(dirname(LOCAL_PROJECTS_PATH), { recursive: true });
  await writeFile(LOCAL_PROJECTS_PATH, JSON.stringify(projects, null, 2), 'utf-8');
}

async function readStore() {
  const stored = isBlobConfigured() ? await readBlobProjects() : await readLocalProjects();
  return stored && stored.length ? stored : getSeededProjects();
}

async function writeStore(projects: ManagedProject[]) {
  if (isBlobConfigured()) {
    await writeBlobProjects(projects);
    return;
  }

  await writeLocalProjects(projects);
}

function sanitizeFileName(fileName: string) {
  return fileName
    .normalize('NFKD')
    .replace(/[^\w.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function sanitizeSlug(slug: string) {
  return slug
    .normalize('NFKD')
    .replace(/[^\w\s-]+/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export async function listProjects(options?: { includeInactive?: boolean }) {
  const projects = await readStore();
  if (options?.includeInactive) return projects;
  return projects.filter((project) => project.active);
}

export async function getHomeProjects(limit = 3) {
  const projects = await listProjects();
  const featured = projects.filter((project) => project.featured);
  return (featured.length ? featured : projects).slice(0, limit);
}

export async function getProjectBySlug(slug: string, options?: { includeInactive?: boolean }) {
  const projects = await listProjects(options);
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getCopy(project: Project, locale: Locale) {
  return project.copy[locale];
}

export async function saveProject({ originalSlug, project }: ProjectPayload) {
  const projects = await readStore();
  const normalized = normalizeProject({
    ...project,
    slug: sanitizeSlug(project.slug)
  });

  if (!normalized.slug) {
    throw new Error('Project slug is required.');
  }

  const duplicate = projects.find(
    (item) => item.slug === normalized.slug && item.slug !== (originalSlug ? sanitizeSlug(originalSlug) : normalized.slug)
  );
  if (duplicate) {
    throw new Error('A project with this slug already exists.');
  }

  const sourceIndex = originalSlug
    ? projects.findIndex((item) => item.slug === sanitizeSlug(originalSlug))
    : projects.findIndex((item) => item.slug === normalized.slug);

  let nextProjects = [...projects];
  if (sourceIndex >= 0) {
    const previous = nextProjects[sourceIndex];
    nextProjects[sourceIndex] = {
      ...normalized,
      createdAt: previous.createdAt,
      updatedAt: nowIso()
    };
  } else {
    nextProjects = [{ ...normalized, createdAt: nowIso(), updatedAt: nowIso() }, ...nextProjects];
  }

  await writeStore(nextProjects);
  return getProjectBySlug(normalized.slug, { includeInactive: true });
}

export async function deleteProject(slug: string) {
  const normalizedSlug = sanitizeSlug(slug);
  const projects = await readStore();
  const nextProjects = projects.filter((project) => project.slug !== normalizedSlug);
  await writeStore(nextProjects);
}

export async function uploadProjectAsset(file: File, projectSlug: string) {
  const sanitizedSlug = sanitizeSlug(projectSlug || 'project');
  const sanitizedFile = sanitizeFileName(file.name || 'asset');
  const pathname = `projects/${sanitizedSlug}/${Date.now()}-${sanitizedFile}`;

  if (isBlobConfigured()) {
    const blob = await put(pathname, file, {
      access: 'public',
      addRandomSuffix: false,
      contentType: file.type || undefined
    });
    return blob.url;
  }

  const targetDir = join(LOCAL_UPLOADS_ROOT, sanitizedSlug);
  const targetPath = join(targetDir, `${Date.now()}-${sanitizedFile}`);
  await mkdir(targetDir, { recursive: true });
  await writeFile(targetPath, Buffer.from(await file.arrayBuffer()));

  return targetPath
    .replace(join(process.cwd(), 'public'), '')
    .replaceAll('\\', '/');
}
