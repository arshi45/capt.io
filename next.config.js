/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: false,
      },
    ]
  },
  swcMinify: true,
  images: {
    unoptimized: true,
  }
}

export default nextConfig