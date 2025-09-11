"use client";

import { UserProfile } from "@/widgets/dashboard/user-profile.component";
import { GroupsPanel } from "@/widgets/dashboard/groups-panel.component";

export default function DashboardView() {
  return (
    <div className="container mx-auto p-4 grid md:grid-cols-3 gap-8">
      <aside className="md:col-span-3">
        <UserProfile />
        <GroupsPanel />
      </aside>
    </div>
  );
}
