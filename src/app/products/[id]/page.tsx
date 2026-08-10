import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { Locale } from '@/dictionaries';
import styles from './page.module.css';

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.titleEn} | Premium E-Commerce`,
    description: product.descEn,
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = params;
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value || 'en') as Locale;
  const isAr = locale === 'ar';

  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true }
  });

  if (!product) {
    notFound();
  }

  return (
    <div className={`container py-12 ${styles.productWrap}`}>
       <div className={styles.imageSection}>
          {product.imageUrl ? (
             <img src={product.imageUrl} alt={product.titleEn} className={styles.heroImage} />
          ) : (
             <div className={styles.placeholderImg}>📸</div>
          )}
       </div>
       <div className={styles.detailsSection}>
          <span className={styles.categoryBadge}>
            {isAr ? product.category.nameAr : product.category.nameEn}
          </span>
          <h1 className={styles.title}>
            {isAr ? product.titleAr : product.titleEn}
          </h1>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          
          <div className={styles.description}>
            <p>{isAr ? product.descAr : product.descEn}</p>
          </div>

          <div className={styles.actions}>
            <button className="btn btn-primary">{isAr ? 'أضف إلى السلة' : 'Add to Cart'}</button>
          </div>
          
          <div className={styles.meta}>
             <p>{isAr ? 'المخزون المتوفر' : 'Stock'}: <strong>{product.stock}</strong></p>
          </div>
       </div>
    </div>
  );
}
