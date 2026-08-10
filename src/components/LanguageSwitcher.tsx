'use client';

import { useRouter } from 'next/navigation';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    document.cookie = `locale=${newLang}; path=/; max-age=31536000`;
    router.refresh(); // Refresh layout to apply new localized text and direction
  };

  return (
    <button onClick={toggleLanguage} className={styles.langBtn} aria-label="Toggle language">
      {currentLang === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
