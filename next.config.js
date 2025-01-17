/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    output: 'export',
    // Required for static HTML export
    trailingSlash: true,
    // Allow loading scripts from CDN
  }
  
  module.exports = nextConfig