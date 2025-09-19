"use client";
import { use } from "react";
import { Authorized } from "@/features/auth/components/authorized.component";
import { ShoppingListView } from "@/widgets/dashboard/shopping-list";

export default function GroupPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = use(params);

  return (
    <Authorized>
      <div className="container mx-auto p-4 relative">
        <ShoppingListView groupId={groupId} />
      </div>
    </Authorized>
  );
}
