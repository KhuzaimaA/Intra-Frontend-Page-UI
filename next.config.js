/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    };
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;

