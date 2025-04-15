/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/PersonalPage',
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/PersonalPage/',
  images: {
    unoptimized: true,
  },
  // Add webpack configuration for audio files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });
    return config;
  }
}

module.exports = nextConfig
