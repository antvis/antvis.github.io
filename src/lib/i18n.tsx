import React, { createContext, useContext } from 'react';
import en from '../locales/en.json';

export type Locale = 'zh' | 'en';
const LocaleContext = createContext<Locale>('zh');
const messages: Record<string, string> = en;

export function translate(locale: Locale, key: string): string {
  return locale === 'en' ? messages[key] || key : key;
}

export function LocaleProvider({
  locale,
  children,
}: React.PropsWithChildren<{ locale: Locale }>) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useTranslation() {
  const locale = useContext(LocaleContext);
  return { locale, t: (key: string) => translate(locale, key) };
}
