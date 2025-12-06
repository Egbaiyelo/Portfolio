// import {getRequestConfig} from 'next-intl/server';
// import {notFound} from 'next/navigation';
// // import {cookies} from 'next/headers';
// import {hasLocale} from 'next-intl';
// import {routing} from './routing';

// export default getRequestConfig(async ({requestLocale}) => {
//   // Typically corresponds to the `[locale]` segment
//   const requested = await requestLocale;
//   const locale = hasLocale(routing.locales, requested)
//     ? requested
//     : routing.defaultLocale;
 
//   return {
//     locale,
//     messages: (await import(`../../messages/${locale}.json`)).default
//     // ...
//   };
// });


import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  // Directly grabing the locale. 
  // For static export, trusting the folder name provided by Next.js
  const locale = (await requestLocale) ?? routing.defaultLocale;

  return {  
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});