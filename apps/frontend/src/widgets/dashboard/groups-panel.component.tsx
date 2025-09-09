"use client";

import { useGroups } from "@/features/groups/hooks/use-groups.hook";
import { SpinnerOverlay } from "@/shared/ui/spinner";
import { AlertFallback } from "@/shared/ui/alert";

export function GroupsPanel() {
  const { data: groups, isError, isLoading } = useGroups();

  if (isLoading) {
    return <SpinnerOverlay variant={"page"} spinnerSize={"lg"} />;
  }

  if (isError || !groups) {
    return <AlertFallback />;
  }

  return (
    <>
      {groups && groups.data.length > 0 ? (
        <ul>
          {groups.data.map((group) => (
            <li key={group.id}>{group.name}</li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Nie należysz jeszcze do żadnej grupy.</p>
          {/* TODO: Dodać formularz tworzenia grupy */}
        </div>
      )}
    </>
  );
}
