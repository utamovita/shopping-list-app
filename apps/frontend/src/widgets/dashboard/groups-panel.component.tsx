"use client";

import { useGroups } from "@/features/groups/hooks/use-groups.hook";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { AlertFallback } from "@/shared/ui/alert";
import { CreateGroupForm } from "@/features/groups/components/create-group-form.component";

export function GroupsPanel() {
  const { data: groups, isError, isLoading } = useGroups();

  if (isLoading) {
    return <SpinnerOverlay variant={"page"} spinnerSize={"lg"} />;
  }

  if (isError || !groups) {
    return <AlertFallback />;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Twoje Grupy</h2>

      <CreateGroupForm />

      {groups.data.length > 0 ? (
        <ul className="border-t pt-4">
          {groups.data.map((group) => (
            <li key={group.id} className="p-2 border-b">
              {group.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground pt-4 text-center">
          Nie należysz jeszcze do żadnej grupy. Stwórz swoją pierwszą!
        </p>
      )}
    </div>
  );
}
