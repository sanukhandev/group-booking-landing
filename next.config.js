/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig ={
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/images': path.resolve(__dirname, 'src/assets/images'),
      '@/vendors': path.resolve(__dirname, 'src/assets/vendors'),
      '@/context': path.resolve(__dirname, 'src/context'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/data': path.resolve(__dirname, 'src/data'),
    };
    return config;
  },
}

module.exports = nextConfig
