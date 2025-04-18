/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Academic-websites',
  assetPrefix: '/Academic-websites/',
  trailingSlash: true,
};

export default nextConfig;