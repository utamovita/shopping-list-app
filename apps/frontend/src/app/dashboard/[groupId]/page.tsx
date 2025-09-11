"use client";
import { use } from "react";

export default function GroupPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = use(params);

  return (
    <div>
      <p>Tutaj będzie lista zakupów dla grupy o ID: {groupId}</p>
    </div>
  );
}
