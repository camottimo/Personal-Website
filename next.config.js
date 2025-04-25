/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  experimental: {
    turbo: {
      enabled: false
    }
  }
}

module.exports = nextConfig 