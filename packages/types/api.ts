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

export type BaseResponse<T> = SuccessResponse<T> | ErrorResponse;

export type UserProfile = {
  id: string;
  email: string;
  name: string | null;
};

export type Group = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
