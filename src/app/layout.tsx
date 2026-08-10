import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import { Locale } from '@/dictionaries';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'Premium E-Commerce',
  description: 'High Quality Shopping Experience built for the modern web.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${cairo.variable}`}>
      <body className={locale === 'en' ? 'font-inter' : 'font-cairo'}>
        <Header locale={locale} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
