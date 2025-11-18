"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/lib/i18n'
import { getLanguageFromStorage, setLanguageToStorage, getTranslations } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  translations: Record<string, any>
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('kz')
  const [translations, setTranslations] = useState<Record<string, any>>(getTranslations('kz'))
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const lang = getLanguageFromStorage()
    setLanguageState(lang)
    setTranslations(getTranslations(lang))
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'kz' ? 'kk' : lang
      document.documentElement.setAttribute('lang', lang === 'kz' ? 'kk' : lang)
    }
    setIsHydrated(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageToStorage(lang)
    setLanguageState(lang)
    setTranslations(getTranslations(lang))
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'kz' ? 'kk' : lang
      document.documentElement.setAttribute('lang', lang === 'kz' ? 'kk' : lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    return {
      language: 'kz' as Language,
      translations: getTranslations('kz'),
      setLanguage: () => {}
    }
  }
  return context
}

export function useTranslation() {
  const { translations } = useLanguage()
  return translations || {}
}
