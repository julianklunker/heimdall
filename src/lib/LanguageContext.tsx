import { createContext, useContext, useState, type ReactNode } from "react"
import { translations, type Lang } from "./translations"

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const t = (key: string): string =>
    translations[lang][key] ?? translations["en"][key] ?? key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
