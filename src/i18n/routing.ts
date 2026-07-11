import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr", "zh"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: false,
});
