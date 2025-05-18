import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Проверяем, что i18n полностью инициализирован
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const handleInitialized = () => {
        setIsReady(true);
      };
      i18n.on('initialized', handleInitialized);
      return () => {
        i18n.off('initialized', handleInitialized);
      };
    }
  }, [i18n]);

  const toggleLanguage = () => {
    if (!isReady) return;
    const newLang = i18n.language === 'ru' ? 'kk' : 'ru';
    i18n.changeLanguage(newLang);
  };

  if (!isReady) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-white opacity-80 hover:opacity-100 transition-opacity px-3 py-2 text-sm font-medium flex items-center gap-1.5"
      aria-label={i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
      disabled={!isReady}
    >
      {i18n.language === 'ru' ? (
        <>
          <img 
            src="/images/kz-flag.svg" 
            alt="Қазақша тілі" 
            className="w-4 h-4 rounded-sm object-cover"
          />
          <span>KZ</span>
        </>
      ) : (
        <>
          <img 
            src="/images/ru-flag.svg" 
            alt="Русский язык" 
            className="w-4 h-4 rounded-sm object-cover"
          />
          <span>RU</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher; 