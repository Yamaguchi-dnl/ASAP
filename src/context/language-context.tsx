'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import ptBR from '@/content/pt-BR.json';
import es from '@/content/es.json';

type Language = 'pt-BR' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: any;
}

const translations = {
  'pt-BR': ptBR,
  'es': es,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');
  const [currentTranslations, setCurrentTranslations] = useState(translations[language]);

  useEffect(() => {
    setCurrentTranslations(translations[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
