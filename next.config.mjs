/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
images: {
  unoptimized: true,
},
basePath: process.env.NODE_ENV === 'production' ? '/Academic-websites' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/Academic-websites/' : '',
trailingSlash: true,
};

export default nextConfig;