import { Locale, dictionaries } from '@/dictionaries';
import LanguageSwitcher from '../LanguageSwitcher';
import styles from './Header.module.css';

export default function Header({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale].nav;

  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.headerContainer}`}>
        <a href="/" className={styles.logo}>
          LUMIÈRE
        </a>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>{dict.home}</a>
          <a href="/products" className={styles.navLink}>{dict.products}</a>
          <a href="/contact" className={styles.navLink}>{dict.contact}</a>
        </nav>
        <div className={styles.actions}>
          <LanguageSwitcher currentLang={locale} />
          <a href="/admin" className="btn btn-primary">{dict.admin}</a>
        </div>
      </div>
    </header>
  );
}
