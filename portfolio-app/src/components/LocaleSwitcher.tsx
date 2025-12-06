'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex gap-4">
      {routing.locales.map((cur) => (
        <Link
          key={cur}
          href={pathname}
          locale={cur}
          // Highlight the active locale
          className={cur === locale ? 'font-bold' : 'underline'}
        >
          {cur.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
