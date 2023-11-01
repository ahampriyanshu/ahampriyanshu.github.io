/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  swcMinify: true,
  output: isProd ? 'export' : undefined,
  distDir: isProd ? 'build' : undefined,
};

module.exports = nextConfig;
