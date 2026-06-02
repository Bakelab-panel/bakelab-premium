import type { APIRoute } from 'astro';

import { isAdminAuthenticated } from '@lib/admin/auth';
import { uploadProjectAsset } from '@lib/project-store';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isAdminAuthenticated(cookies)) {
    return Response.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const formData = await request.formData();
  const slug = String(formData.get('slug') || 'project');
  const files = formData.getAll('files').filter((item): item is File => item instanceof File && item.size > 0);

  if (!files.length) {
    return Response.json({ error: 'No files received.' }, { status: 400 });
  }

  const uploads = await Promise.all(
    files.map(async (file) => ({
      name: file.name,
      url: await uploadProjectAsset(file, slug)
    }))
  );

  return Response.json({ uploads });
};
