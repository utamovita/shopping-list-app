export const APP_PATHS = {
  home: "/",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  dashboardGroup: (groupId: string) => `/dashboard/${groupId}`,
};

export const API_PATHS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    profile: "/auth/profile",
  },
  groups: "/groups",
  shoppingList: (groupId: string) => `/groups/${groupId}/items`,
  invitations: (groupId: string) => `/groups/${groupId}/invitations`,
};
