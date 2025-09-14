"use client";

import { useEffect } from "react";
import i18n from "./i18n";

export function LanguageUpdater() {
  useEffect(() => {
    const setLangAttr = (lng: string) => {
      document.documentElement.lang = lng;
    };

    if (i18n.isInitialized) {
      setLangAttr(i18n.language);
    }

    i18n.on("languageChanged", setLangAttr);

    return () => {
      i18n.off("languageChanged", setLangAttr);
    };
  }, []);

  return null;
}
