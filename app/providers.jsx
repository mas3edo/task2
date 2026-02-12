"use client";

import { LanguageProvider } from "./i18n/LanguageProvider";

export default function Providers({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
