/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
}
const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true
})
module.exports = nextConfig
module.exports = withPWA(nextConfig);