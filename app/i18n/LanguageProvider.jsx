"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "lang";

function normalizeLang(value) {
  if (value === "en" || value === "ar") return value;
  return null;
}

export function LanguageProvider({ children, defaultLang = "en" }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return defaultLang;

    const stored = normalizeLang(window.localStorage.getItem(STORAGE_KEY));
    if (stored) return stored;

    const browserLang = (window.navigator?.language || "").toLowerCase();
    if (browserLang.startsWith("ar")) return "ar";

    return defaultLang;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }

    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.classList.toggle("rtl", dir === "rtl");
  }, [lang]);

  const t = useCallback(
    (key) => {
      const parts = key.split(".");
      let current = translations[lang];
      for (const part of parts) current = current?.[part];
      return typeof current === "string" ? current : key;
    },
    [lang],
  );

  const value = useMemo(
    () => ({
      lang,
      dir: lang === "ar" ? "rtl" : "ltr",
      setLang,
      toggleLang: () => setLang((l) => (l === "ar" ? "en" : "ar")),
      t,
    }),
    [lang, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
