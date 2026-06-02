import { createHmac, timingSafeEqual } from 'node:crypto';

import type { AstroCookies } from 'astro';

import {
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_MAX_AGE,
  getAdminPassword,
  getAdminSessionSecret,
  hasAdminPassword
} from '@lib/admin/config';

function toBase64Url(input: string) {
  return Buffer.from(input, 'utf-8').toString('base64url');
}

function sign(payload: string) {
  return createHmac('sha256', getAdminSessionSecret()).update(payload).digest('base64url');
}

function safeCompare(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function validateAdminPassword(password: string) {
  if (!hasAdminPassword()) return false;
  return safeCompare(password, getAdminPassword());
}

export function createAdminSessionValue() {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload = `${toBase64Url('owner')}.${issuedAt}`;
  return `${payload}.${sign(payload)}`;
}

export function isAdminAuthenticated(cookies: Pick<AstroCookies, 'get'>) {
  const value = cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!value) return false;

  const parts = value.split('.');
  if (parts.length !== 3) return false;

  const payload = `${parts[0]}.${parts[1]}`;
  const expected = sign(payload);
  if (!safeCompare(parts[2], expected)) return false;

  const issuedAt = Number(parts[1]);
  if (!Number.isFinite(issuedAt)) return false;

  const expiresAt = issuedAt + ADMIN_SESSION_MAX_AGE;
  return Math.floor(Date.now() / 1000) < expiresAt;
}

export function setAdminSession(cookies: AstroCookies) {
  cookies.set(ADMIN_COOKIE_NAME, createAdminSessionValue(), {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: import.meta.env.PROD,
    maxAge: ADMIN_SESSION_MAX_AGE
  });
}

export function clearAdminSession(cookies: AstroCookies) {
  cookies.delete(ADMIN_COOKIE_NAME, {
    path: '/'
  });
}
