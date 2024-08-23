/** @type {import('next').NextConfig} */

const basePath = process.env.BASE_PATH;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: basePath,
  basePath,
  publicRuntimeConfig: {
    basePath,
  },
};

module.exports = nextConfig;
