const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: { domains: ['assets.foundlab.io'] },
  env: {
    GRAPH_ENDPOINT: process.env.GRAPH_ENDPOINT,
    REDIS_URL: process.env.REDIS_URL,
  },
});
