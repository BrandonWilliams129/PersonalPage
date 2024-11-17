/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/PersonalPage',
  assetPrefix: '/PersonalPage',
}

module.exports = nextConfig
