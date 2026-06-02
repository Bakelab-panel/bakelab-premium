export const ADMIN_PANEL_SEGMENT = import.meta.env.PUBLIC_ADMIN_PANEL_SEGMENT?.trim() || 'panel-7h4m2q';
export const ADMIN_COOKIE_NAME = 'bakelab_admin_session';
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 14;

export function getAdminPassword() {
  return import.meta.env.ADMIN_PASSWORD?.trim() || '';
}

export function hasAdminPassword() {
  return getAdminPassword().length > 0;
}

export function getAdminSessionSecret() {
  return import.meta.env.ADMIN_SESSION_SECRET?.trim() || getAdminPassword() || 'bakelab-admin-dev-secret';
}
