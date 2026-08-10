import { prisma } from '@/lib/prisma';
import styles from './page.module.css';
import { cookies } from 'next/headers';
import { Locale } from '@/dictionaries';

export default async function ProductsPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value || 'en') as Locale;
  const isAr = locale === 'ar';

  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="container py-12">
      <div className={styles.header}>
        <h1 className="text-2xl font-bold">{isAr ? 'جميع المنتجات' : 'All Products'}</h1>
        <p className="text-muted">{products.length} {isAr ? 'منتج متاح' : 'products available'}</p>
      </div>

      <div className={styles.grid}>
        {products.map(product => (
          <a href={`/products/${product.id}`} key={product.id} className={styles.card}>
            <div className={styles.imageBox}>
               {product.imageUrl ? (
                 <img src={product.imageUrl} alt={product.titleEn} className={styles.image} />
               ) : (
                 <span className={styles.placeholder}>🛍️</span>
               )}
            </div>
            <div className={styles.content}>
              <span className={styles.categoryBadge}>
                {isAr ? product.category.nameAr : product.category.nameEn}
              </span>
              <h2 className={styles.title}>{isAr ? product.titleAr : product.titleEn}</h2>
              <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
