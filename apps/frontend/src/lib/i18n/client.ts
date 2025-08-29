"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`@repo/i18n/locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common", "validation"],
  });
