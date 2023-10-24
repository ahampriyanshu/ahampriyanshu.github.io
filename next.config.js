/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  // basePath: '',
  output: 'export',
  distDir: 'dist',
  images: { unoptimized: true },
};

module.exports = nextConfig;
