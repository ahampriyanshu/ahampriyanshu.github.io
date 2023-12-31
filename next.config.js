/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  output: isProd ? 'export' : undefined,
  distDir: isProd ? 'build' : undefined,
};

module.exports = nextConfig;
