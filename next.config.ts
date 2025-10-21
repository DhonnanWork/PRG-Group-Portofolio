/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/PRG-Group-Portofolio',
  assetPrefix: '/PRG-Group-Portofolio/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;