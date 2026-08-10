export const dictionaries = {
  en: {
    nav: { home: 'Home', products: 'Products', contact: 'Contact', admin: 'Admin' },
    hero: { title: 'Premium E-Commerce', subtitle: 'Experience the best quality products wrapped in a stunning UI.', cta: 'Shop Now' },
    footer: { rights: 'All rights reserved.' }
  },
  ar: {
    nav: { home: 'الرئيسية', products: 'المنتجات', contact: 'اتصل بنا', admin: 'الإدارة' },
    hero: { title: 'تجارة إلكترونية فاخرة', subtitle: 'اكتشف أفضل المنتجات جودة بتصميم واجهة مستخدم مذهل.', cta: 'تسوق الآن' },
    footer: { rights: 'جميع الحقوق محفوظة.' }
  }
};
export type Locale = keyof typeof dictionaries;
