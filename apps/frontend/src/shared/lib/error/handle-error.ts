import { toast } from "sonner";
import i18next from "@/shared/lib/i18n/client";

type HandleErrorOptions = {
  error: unknown;
  showToast?: boolean;
};

export function handleError({ error, showToast = true }: HandleErrorOptions) {
  let messageKey = "error.generic";

  if (error instanceof Error) {
    messageKey = error.message;
  }

  console.error("An error occurred:", error);

  if (showToast) {
    toast.error(i18next.t(messageKey));
  }
}
