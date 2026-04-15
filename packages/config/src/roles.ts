export const roles = ['super_admin', 'analyst_admin', 'support_admin', 'member'] as const;
export type Role = (typeof roles)[number];
