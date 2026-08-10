import { cookies } from 'next/headers';
import { Locale } from '@/dictionaries';

export default async function ContactPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value || 'en') as Locale;
  const isAr = locale === 'ar';

  return (
    <div className="container py-12" style={{ maxWidth: '600px' }}>
      <h1 className="text-2xl font-bold mb-6 text-center">
        {isAr ? 'تواصل معنا' : 'Contact Us'}
      </h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input 
          type="text" 
          placeholder={isAr ? 'الاسم' : 'Name'} 
          className="glass"
          style={{ padding: '1rem', borderRadius: 'var(--radius-md)' }}
        />
        <input 
          type="email" 
          placeholder={isAr ? 'البريد الإلكتروني' : 'Email'}
          className="glass"
          style={{ padding: '1rem', borderRadius: 'var(--radius-md)' }} 
        />
        <textarea 
          placeholder={isAr ? 'الرسالة' : 'Message'} 
          rows={5}
          className="glass"
          style={{ padding: '1rem', borderRadius: 'var(--radius-md)', resize: 'none' }}
        ></textarea>
        <button type="button" className="btn btn-primary mt-4">
          {isAr ? 'إرسال الرسالة' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
