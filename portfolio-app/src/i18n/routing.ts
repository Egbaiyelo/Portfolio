import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],

  defaultLocale: 'en',
  localePrefix: 'always',

  // For when I ever have a page that needs this
  // pathnames: {
  //   '/about': {
  //     en: '/about',
  //     fr: '/apropos'
  //   }
  // }
});