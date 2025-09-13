export type SuccessResponse<T> = {
  success: true;
  data: T;
  message?: string;
};

export type ErrorResponse = {
  success: false;
  error: {
    message: string;
    details?: any;
  };
};

export type UserProfile = {
  id: string;
  email: string;
  name: string | null;
};

export type Group = {
  id: string;
  name: string;
  _count: {
    shoppingItems: number;
  };
  members: Array<{
    user: {
      id: string;
      name: string | null;
    };
  }>;
};

export type ShoppingListItem = {
  id: string;
  name: string;
  addedBy: string | null;
  createdAt: Date;
  groupId: string;
};
