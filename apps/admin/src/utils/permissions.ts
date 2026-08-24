import { PERMISSIONS } from '@/constants/permission.constants';
import type { Permission } from '@/constants/permission.constants';
import type { AdminRole } from '@/constants/role.constants';

const rolePermissions: Record<AdminRole, readonly Permission[]> = {
  ADMIN: Object.values(PERMISSIONS),
  MANAGER: [
    PERMISSIONS.dashboardView,
    PERMISSIONS.machinesView,
    PERMISSIONS.machinesManage,
    PERMISSIONS.bookingsView,
    PERMISSIONS.bookingsManage,
    PERMISSIONS.ordersView,
    PERMISSIONS.customersView,
    PERMISSIONS.paymentsView,
    PERMISSIONS.reportsView,
  ],
  STAFF: [
    PERMISSIONS.dashboardView,
    PERMISSIONS.machinesView,
    PERMISSIONS.bookingsView,
    PERMISSIONS.ordersView,
    PERMISSIONS.customersView,
  ],
};
export const hasPermission = (role: AdminRole, permission: Permission): boolean =>
  rolePermissions[role].includes(permission);
