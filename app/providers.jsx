"use client";

import { LanguageProvider } from "./i18n/LanguageProvider";

export default function Providers({ children, defaultLang }) {
  return (
    <LanguageProvider defaultLang={defaultLang}>{children}</LanguageProvider>
  );
}
