"use client";

import { UserProfile } from "@/widgets/dashboard/user-profile.component";
import { GroupsPanel } from "@/widgets/dashboard/groups-panel.component";

export default function DashboardView() {
  return (
    <div className="container mx-auto p-4">
      <UserProfile />
      <main>
        <GroupsPanel />
      </main>
    </div>
  );
}
