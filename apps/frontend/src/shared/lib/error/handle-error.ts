import { toast } from "sonner";
import i18next from "@/shared/lib/i18n/client";

type HandleErrorOptions = {
  error: unknown;
  showToast?: boolean;
};

export function handleError({ error, showToast = false }: HandleErrorOptions) {
  let messageKey = "error.generic";

  if (typeof error === "object" && error !== null && "response" in error) {
    const response = (error as { response: unknown }).response;
    if (
      typeof response === "object" &&
      response !== null &&
      "data" in response
    ) {
      const data = (response as { data: unknown }).data;
      if (typeof data === "object" && data !== null && "error" in data) {
        const errorDetail = (data as { error: unknown }).error;
        if (
          typeof errorDetail === "object" &&
          errorDetail !== null &&
          "message" in errorDetail &&
          typeof (errorDetail as { message: unknown }).message === "string"
        ) {
          messageKey = (errorDetail as { message: string }).message;
        }
      }
    }
  } else if (error instanceof Error) {
    messageKey = error.message;
  } else if (typeof error === "string") {
    messageKey = error;
  }

  console.error("An error occurred:", error);

  if (showToast) {
    toast.error(i18next.t(messageKey));
  }
}
