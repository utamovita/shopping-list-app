"use client";

import { useQuery } from "@tanstack/react-query";
import { groupsApi } from "../api/groups.api";
import { useAuthStore } from "@/shared/store/auth.store";

export function useGroups() {
  const token = useAuthStore((state) => state.accessToken);

  return useQuery({
    queryKey: ["groups", token],
    queryFn: groupsApi.getAll,
    enabled: !!token,
  });
}
