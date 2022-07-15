/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: '/about/:lang*',
        destination: '/shared/about',
      }
    ]
  },
}

module.exports = nextConfig
