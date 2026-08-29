const withGui = require('@hanzo/ui/next')

const withMDX = require('@next/mdx')()
const svgrWebpackConfig = require('./svgr.next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: svgrWebpackConfig,
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },

  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lux.network',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  transpilePackages: [
    '@hanzo/auth',
    '@luxfi/data',
    '@luxfi/menu-icons',
  ],
  productionBrowserSourceMaps: true,
  experimental: {
    // Fix for ESM modules issue
    esmExternals: false,
  },
}

module.exports = withGui(withMDX(nextConfig), __dirname)
