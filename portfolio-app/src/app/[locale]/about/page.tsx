import Nav from '@/components/nav';
import {useTranslations} from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('About'); 
  return (  
    <div>
      <Nav/>
      <h1>{t('title')}</h1>
    </div>
  );
}