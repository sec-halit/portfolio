// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/about/:lang*',
        destination: '/shared/about',
      },
      {
        source: '/profile/:lang*',
        destination: '/shared/profile',
      },
      {
        source: '/auth/login/:loginType',
        destination: '/auth/login',
      },
      {
        source: '/api/cvs/getProfile/:lang',
        destination: '/api/cvs/getProfile',
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname,'src','assets','styles')],
  },
  // experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
