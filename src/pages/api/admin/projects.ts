import type { APIRoute } from 'astro';

import { isAdminAuthenticated } from '@lib/admin/auth';
import { deleteProject, listProjects, saveProject, type ManagedProject } from '@lib/project-store';

function unauthorized() {
  return Response.json({ error: 'Unauthorized.' }, { status: 401 });
}

function parseList(input: unknown) {
  if (Array.isArray(input)) {
    return input.map((item) => String(item).trim()).filter(Boolean);
  }

  return [];
}

function parseCopy(input: unknown) {
  const value = input && typeof input === 'object' ? (input as Record<string, unknown>) : {};

  return {
    title: String(value.title || ''),
    category: String(value.category || ''),
    description: String(value.description || ''),
    fullDescription: String(value.fullDescription || ''),
    objective: String(value.objective || ''),
    process: String(value.process || '')
  };
}

function parseProject(input: unknown): ManagedProject {
  const value = input && typeof input === 'object' ? (input as Record<string, unknown>) : {};

  return {
    slug: String(value.slug || ''),
    active: Boolean(value.active ?? true),
    year: String(value.year || '').trim() || undefined,
    client: String(value.client || '').trim() || undefined,
    cover: String(value.cover || '').trim() || undefined,
    gallery: parseList(value.gallery),
    externalLink: String(value.externalLink || '').trim() || undefined,
    featured: Boolean(value.featured),
    tools: parseList(value.tools),
    copy: {
      pt: parseCopy(value.copy && typeof value.copy === 'object' ? (value.copy as Record<string, unknown>).pt : undefined),
      en: parseCopy(value.copy && typeof value.copy === 'object' ? (value.copy as Record<string, unknown>).en : undefined)
    },
    createdAt: String(value.createdAt || ''),
    updatedAt: String(value.updatedAt || '')
  };
}

export const GET: APIRoute = async ({ cookies }) => {
  if (!isAdminAuthenticated(cookies)) return unauthorized();

  const projects = await listProjects({ includeInactive: true });
  return Response.json({ projects });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAdminAuthenticated(cookies)) return unauthorized();

  const payload = (await request.json()) as {
    originalSlug?: string;
    project?: unknown;
  };

  if (!payload.project) {
    return Response.json({ error: 'Project payload is required.' }, { status: 400 });
  }

  try {
    const project = await saveProject({
      originalSlug: payload.originalSlug,
      project: parseProject(payload.project)
    });

    return Response.json({ project });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to save project.' },
      { status: 400 }
    );
  }
};

export const DELETE: APIRoute = async ({ request, cookies }) => {
  if (!isAdminAuthenticated(cookies)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return Response.json({ error: 'Slug is required.' }, { status: 400 });
  }

  await deleteProject(slug);
  return Response.json({ ok: true });
};
