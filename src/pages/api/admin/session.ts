import type { APIRoute } from 'astro';

import {
  clearAdminSession,
  isAdminAuthenticated,
  setAdminSession,
  validateAdminPassword
} from '@lib/admin/auth';
import { hasAdminPassword } from '@lib/admin/config';

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const password = String(formData.get('password') || '');

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
