"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, Locale } from "./translations";

type TranslationShape = { [K in keyof typeof translations.en]: string };

interface LanguageContextType {
  locale: Locale;
  t: TranslationShape;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  t: translations.en as TranslationShape,
  setLocale: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] as TranslationShape, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
