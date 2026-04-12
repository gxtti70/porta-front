import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#1f2937] border-2 border-zinc-700/50 rounded-full text-zinc-300 font-mono text-sm font-bold shadow-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
};