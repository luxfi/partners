const path = require('path')

const withMDX = require('@next/mdx')()
const svgrWebpackConfig = require('./svgr.next.config')

const luxUiDir = path.join(__dirname, 'node_modules/@luxfi/ui')

/*
  @luxfi/ui's package entry (components/index.ts) is a barrel that also re-exports its
  auth panels, which pull @hanzo/auth -> Firebase into the module graph. Firebase throws
  auth/invalid-api-key while prerendering, so `output: 'export'` cannot complete.

  This site is a static marketing page with no auth, so alias the two presentational
  components it actually uses straight to their sources, bypassing the barrel.
*/
const webpack = (config, ctx) => {
  config = svgrWebpackConfig(config, ctx)
  config.resolve.alias['@luxfi/ui/components/main$'] = path.join(luxUiDir, 'components/main.tsx')
  config.resolve.alias['@luxfi/ui/components/footer$'] = path.join(luxUiDir, 'components/footer.tsx')

  // @luxfi/ui's <Footer> renders its own <Copyright>, which hardcodes the wrong legal entity.
  // Point that one import at our local override instead of forking the footer.
  config.plugins.push(
    new ctx.webpack.NormalModuleReplacementPlugin(/^\.\/copyright$/, (resource) => {
      if (resource.context.split(path.sep).join('/').includes('@luxfi/ui/components')) {
        resource.request = path.join(__dirname, 'src/blocks/components/copyright.tsx')
      }
    })
  )

  return config
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: { ignoreDuringBuilds: true },
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
    '@hanzo/ui',
    '@hanzo/auth',
    '@hanzo/commerce',
    '@luxfi/ui',
    '@luxfi/data',
    '@luxfi/menu-icons',
  ],
  productionBrowserSourceMaps: true,
  webpack,
  experimental: {
    // Fix for ESM modules issue
    esmExternals: false,
  },
}

module.exports = withMDX(nextConfig)
