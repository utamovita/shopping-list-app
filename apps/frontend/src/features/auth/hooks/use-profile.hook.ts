"use client";

import { useQuery } from "@tanstack/react-query";
import { userApi } from "../api/user.api";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: userApi.getProfile,
  });
}
