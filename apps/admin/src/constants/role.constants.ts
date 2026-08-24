export const ADMIN_ROLES = ['ADMIN', 'MANAGER', 'STAFF'] as const;
export type AdminRole = (typeof ADMIN_ROLES)[number];
