import { env } from "@/lib/env";
import { ErrorResponse, SuccessResponse } from "@repo/types/api";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const errorResponse = error.response.data as ErrorResponse;
      const message = errorResponse.error.message || "error.generic";

      return Promise.reject(new Error(message));
    }
    return Promise.reject(error);
  },
);

export const apiClient = {
  get: <T>(url: string, params?: object) =>
    axiosInstance.get<SuccessResponse<T>>(url, { params }),

  post: <T>(url: string, data: unknown) =>
    axiosInstance.post<SuccessResponse<T>>(url, data),

  patch: <T>(url: string, data: unknown) =>
    axiosInstance.patch<SuccessResponse<T>>(url, data),

  delete: <T>(url: string) => axiosInstance.delete<SuccessResponse<T>>(url),
};
