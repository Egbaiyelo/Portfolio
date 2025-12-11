import { setRequestLocale, getTranslations } from 'next-intl/server';
import LocaleSwitcher from '@/components/LocaleSwitcher';


export const dynamic = 'force-static';
// export const revalidate = false;

import Nav from '@/components/nav';
// import { useTranslations } from 'next-intl';

export default async function Home({
  params
}: {
  params: { locale: string };
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Homepage');

  return (
    <div>
      <Nav></Nav>
    </div>
  );
}
