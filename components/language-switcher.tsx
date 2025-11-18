"use client"

import { useLanguage } from '@/components/language-provider'
import type { Language } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const toggleLanguage = () => {
    const newLanguage: Language = language === 'kz' ? 'ru' : 'kz'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 text-xs md:text-sm font-medium rounded bg-white/10 hover:bg-white/20 transition-colors duration-200"
      aria-label="Switch language"
      title={`Switch to ${language === 'kz' ? 'Russian' : 'Kazakh'}`}
    >
      <span className={`inline-block mr-1 ${language === 'kz' ? 'font-bold' : 'opacity-70'}`}>KZ</span>
      <span className="text-gray-200">|</span>
      <span className={`inline-block ml-1 ${language === 'ru' ? 'font-bold' : 'opacity-70'}`}>RU</span>
    </button>
  )
}
