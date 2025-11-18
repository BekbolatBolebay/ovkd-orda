/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    optimizePackageImports: ["@radix-ui/react-*"],
  },
}

module.exports = nextConfig
