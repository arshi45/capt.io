/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: true,
      },
    ]
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
