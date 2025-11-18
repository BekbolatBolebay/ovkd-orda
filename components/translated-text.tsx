"use client"

import { useLanguage } from "@/components/language-provider"

interface TranslatedTextProps {
  kz: string
  ru: string
}

export function TranslatedText({ kz, ru }: TranslatedTextProps) {
  const { language } = useLanguage()
  return <>{language === 'ru' ? ru : kz}</>
}

interface ConditionalTextProps {
  condition: boolean
  trueTextKz: string
  trueTextRu: string
  falseTextKz: string
  falseTextRu: string
}

export function ConditionalTranslatedText({
  condition,
  trueTextKz,
  trueTextRu,
  falseTextKz,
  falseTextRu,
}: ConditionalTextProps) {
  const { language } = useLanguage()
  const text = condition
    ? (language === 'ru' ? trueTextRu : trueTextKz)
    : (language === 'ru' ? falseTextRu : falseTextKz)
  return <>{text}</>
}
