/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PersonalPage',
  assetPrefix: '/PersonalPage/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
