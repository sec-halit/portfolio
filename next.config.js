/** @type {import('next').NextConfig} */
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
        source: '/auth/login/:loginType',
        destination: '/auth/login',
      },
      {
        source: '/api/cvs/getById/:id',
        destination: '/api/cvs/getById',
      }
    ]
  },
}

module.exports = nextConfig
