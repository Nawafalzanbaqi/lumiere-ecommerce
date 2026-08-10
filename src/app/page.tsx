import { cookies } from 'next/headers';
import styles from './page.module.css';
import { Locale, dictionaries } from '@/dictionaries';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = dictionaries[locale].hero;

  const isAr = locale === 'ar';

  // Fetch some featured products (latest 3)
  const featuredProducts = await prisma.product.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className={styles.homeLayout}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            {dict.title}
          </h1>
          <p className={styles.heroSubtitle}>
            {dict.subtitle}
          </p>
          <div className={styles.heroActions}>
            <a href="/products" className="btn btn-primary">{dict.cta}</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={`container ${styles.featured}`}>
        <h2 className={styles.sectionTitle}>
          {isAr ? 'المنتجات المميزة' : 'Featured Products'}
        </h2>
        
        {featuredProducts.length > 0 ? (
          <div className={styles.productGrid}>
             {featuredProducts.map(product => (
               <a href={`/products/${product.id}`} key={product.id} className={styles.productCard}>
                 <div className={styles.productImagePlaceholder}>
                    {/* Placeholder for real images */}
                    <span className={styles.imageIcon}>📸</span>
                 </div>
                 <div className={styles.productInfo}>
                   <h3 className={styles.productTitle}>
                     {isAr ? product.titleAr : product.titleEn}
                   </h3>
                   <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                 </div>
               </a>
             ))}
          </div>
        ) : (
          <p className="text-center text-muted py-12">
            {isAr ? 'لا توجد منتجات حتى الآن.' : 'No products available yet.'}
          </p>
        )}
      </section>

      {/* Trust Badges / Features */}
      <section className={styles.features}>
        <div className={`container ${styles.featureGrid}`}>
           <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🚀</span>
              <h4 className={styles.featureTitle}>{isAr ? 'شحن سريع' : 'Fast Shipping'}</h4>
              <p className={styles.featureDesc}>{isAr ? 'توصيل في نفس اليوم لجميع الطلبات.' : 'Same-day delivery on all orders.'}</p>
           </div>
           <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🛡️</span>
              <h4 className={styles.featureTitle}>{isAr ? 'دفع آمن' : 'Secure Payments'}</h4>
              <p className={styles.featureDesc}>{isAr ? 'بنية تحتية مشفرة بنسبة 100٪.' : '100% encrypted infrastructure.'}</p>
           </div>
           <div className={styles.featureItem}>
              <span className={styles.featureIcon}>💎</span>
              <h4 className={styles.featureTitle}>{isAr ? 'جودة فاخرة' : 'Premium Quality'}</h4>
              <p className={styles.featureDesc}>{isAr ? 'مواد عالية الجودة مضمونة.' : 'Top-tier materials guaranteed.'}</p>
           </div>
        </div>
      </section>
    </div>
  );
}
