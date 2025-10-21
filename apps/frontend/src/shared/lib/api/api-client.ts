import { env } from "@/shared/lib/env";
import { ErrorResponse, SuccessResponse } from "@repo/types";
import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/shared/store/auth.store";
import { AuthResponseType } from "@repo/schemas";
import { API_PATHS } from "@repo/config";

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (reason?: Error) => void;
}[] = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    const { logout, setTokens, refreshToken } = useAuthStore.getState();

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          if (originalRequest.headers) {
            originalRequest.headers["Authorization"] = "Bearer " + token;
          }
          return axiosInstance(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      if (!refreshToken) {
        logout();
        isRefreshing = false;
        return Promise.reject(error);
      }

      try {
        const response = await axios.post<SuccessResponse<AuthResponseType>>(
          `${env.NEXT_PUBLIC_API_URL}${API_PATHS.auth.refresh}`,
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } },
        );

        const newTokens = response.data.data;
        setTokens({
          accessToken: newTokens.accessToken,
          refreshToken: newTokens.refreshToken,
        });

        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] =
            `Bearer ${newTokens.accessToken}`;
        }

        processQueue(null, newTokens.accessToken);
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as Error, null);
        logout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (error.response) {
      const errorResponse = error.response.data as ErrorResponse;
      const message = errorResponse.error?.message || "error.generic";
      return Promise.reject(new Error(message));
    }
    return Promise.reject(error);
  },
);

export const apiClient = {
  get: <T>(url: string, params?: object) =>
    axiosInstance.get<SuccessResponse<T>>(url, { params }),

  post: <T>(url: string, data: unknown, config?: InternalAxiosRequestConfig) =>
    axiosInstance.post<SuccessResponse<T>>(url, data, config),

  patch: <T>(url: string, data: unknown) =>
    axiosInstance.patch<SuccessResponse<T>>(url, data),

  delete: <T>(url: string) => axiosInstance.delete<SuccessResponse<T>>(url),
};
