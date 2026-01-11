import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: isProd ? '/Portfolio' : '', 
  // assetPrefix: '/Portfolio/portfolio-app',
  // matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};

// export default withNextIntl(nextConfig);
export default withNextIntl(nextConfig);
