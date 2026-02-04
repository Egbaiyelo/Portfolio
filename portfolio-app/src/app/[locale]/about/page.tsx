import Nav from '@/components/nav';
// import {useTranslations} from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';


export default async function AboutPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div>
      <Nav />
      <h1>{t('title')}</h1>
    </div>
  );
}