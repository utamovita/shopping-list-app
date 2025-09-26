"use client";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/shared/store/auth.store";
import { invitationsApi } from "../api/invitations.api";

export function useReceivedInvitations() {
  const token = useAuthStore((state) => state.token);
  return useQuery({
    queryKey: ["invitations", "received", token],
    queryFn: invitationsApi.getReceived,
    enabled: !!token,
  });
}
