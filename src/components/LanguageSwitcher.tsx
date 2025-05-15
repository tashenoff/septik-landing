import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'kk' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-white opacity-80 hover:opacity-100 transition-opacity px-3 py-2 text-sm font-medium flex items-center gap-1.5"
      aria-label={i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
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