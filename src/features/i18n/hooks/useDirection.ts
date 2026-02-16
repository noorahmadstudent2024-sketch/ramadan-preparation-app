import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { rtlLanguages } from '@/i18n';

export const useDirection = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = rtlLanguages.includes(currentLanguage);
  const direction = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage;

    // Add language class to body
    document.body.classList.remove('lang-en', 'lang-ar', 'lang-ur');
    document.body.classList.add(`lang-${currentLanguage}`);
  }, [currentLanguage, direction]);

  return {
    isRTL,
    direction,
    language: currentLanguage,
  };
};
