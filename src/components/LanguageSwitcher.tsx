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
      className="text-white opacity-80 hover:opacity-100 transition-opacity px-3 py-2 text-sm font-medium"
      aria-label={i18n.language === 'ru' ? 'Қазақша' : 'Русский'}
    >
      {i18n.language === 'ru' ? 'KZ' : 'RU'}
    </button>
  );
};

export default LanguageSwitcher; 