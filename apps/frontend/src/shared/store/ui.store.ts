import { create } from "zustand";
import type { GroupWithDetails } from "@repo/types";
import type { Group } from "@repo/database";

export const DIALOG_TYPES = {
  MANAGE_MEMBERS: "manage-members",
  RENAME_GROUP: "rename-group",
  DELETE_GROUP: "delete-group",
  CREATE_GROUP: "create-group",
} as const;

type DialogType = (typeof DIALOG_TYPES)[keyof typeof DIALOG_TYPES];

export type DialogPayload = {
  [DIALOG_TYPES.MANAGE_MEMBERS]: { group: GroupWithDetails };
  [DIALOG_TYPES.RENAME_GROUP]: { group: Group };
  [DIALOG_TYPES.DELETE_GROUP]: { group: Group };
  [DIALOG_TYPES.CREATE_GROUP]: Record<string, never>;
};

type DialogState =
  | {
      [K in DialogType]: {
        type: K;
        props: DialogPayload[K];
      };
    }[DialogType]
  | { type: null; props: Record<string, never> };

type UiStore = {
  dialogState: DialogState;
  openDialog: <T extends DialogType>(type: T, props: DialogPayload[T]) => void;
  closeDialog: () => void;

  isPageTransitioning: boolean;
  setPageTransitioning: (isLoading: boolean) => void;
};

export const useUiStore = create<UiStore>((set) => ({
  dialogState: {
    type: null,
    props: {},
  },
  openDialog: (type, props) => {
    set({ dialogState: { type, props } as DialogState });
  },
  closeDialog: () => set({ dialogState: { type: null, props: {} } }),

  isPageTransitioning: false,
  setPageTransitioning: (isLoading) => set({ isPageTransitioning: isLoading }),
}));
