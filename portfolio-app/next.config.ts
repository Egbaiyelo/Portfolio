import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // basePath: '/portfolio-app', 
  images: {
    unoptimized: true, 
  },
};

// export default withNextIntl(nextConfig);
export default withNextIntl(nextConfig);
