/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    output: 'export',
    basePath: '/wid-conference', // replace with your actual repo name
    assetPrefix: '/wid-conference/',
    // Required for static HTML export
    trailingSlash: true,
    // Allow loading scripts from CDN
  }
  
  module.exports = nextConfig