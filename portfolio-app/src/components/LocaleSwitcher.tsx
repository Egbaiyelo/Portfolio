'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import FlagsGetter from './svgs/languages';



export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className="flex flex-row">
      {routing.locales.map((cur) => (
        <Link
          key={cur}
          href={pathname}
          locale={cur}
          // Highlight the active locale
          className={cur === locale ? 'font-bold' : 'underline'}
        >
          <span className='flex items-center'>
            <FlagsGetter get={cur} classname='w-8 h-8 ml-4 mr-1' />
            <p>{`${cur.toUpperCase()}  `}</p>
          </span>
        </Link>
      ))}
    </div>
  );
}
