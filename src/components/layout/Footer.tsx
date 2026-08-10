import { Locale, dictionaries } from '@/dictionaries';

export default function Footer({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale].footer;

  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'var(--surface-color)',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-muted)',
      fontSize: '0.875rem',
      marginTop: '4rem'
    }}>
      <p>&copy; {new Date().getFullYear()} LUMIÈRE. {dict.rights}</p>
    </footer>
  );
}
