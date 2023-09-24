/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NEXT_PUBLIC_IS_EXPORT === 'true' ? 'export' : undefined,
  distDir: process.env.NEXT_PUBLIC_IS_EXPORT === 'true' ? 'wwwroot' : undefined,
}

module.exports = nextConfig
