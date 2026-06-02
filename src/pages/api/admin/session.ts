import type { APIRoute } from 'astro';

import {
  clearAdminSession,
  isAdminAuthenticated,
  setAdminSession,
  validateAdminPassword
} from '@lib/admin/auth';
import { hasAdminPassword } from '@lib/admin/config';

export const POST: APIRoute = async ({ request, cookies }) => {
  const contentType = request.headers.get('content-type') || '';
  let password = '';

  if (contentType.includes('application/json')) {
    const payload = (await request.json()) as { password?: string };
    password = String(payload.password || '');
  } else {
    const formData = await request.formData();
    password = String(formData.get('password') || '');
  }

  if (!hasAdminPassword()) {
    return Response.json(
      { error: 'ADMIN_PASSWORD is not configured on the server.' },
      { status: 500 }
    );
  }

  if (!validateAdminPassword(password)) {
    return Response.json({ error: 'Invalid password.' }, { status: 401 });
  }

  setAdminSession(cookies);
  return Response.json({ ok: true });
};

export const DELETE: APIRoute = async ({ cookies }) => {
  if (isAdminAuthenticated(cookies)) {
    clearAdminSession(cookies);
  }

  return Response.json({ ok: true });
};
