/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // <-- CHANGE THIS LINE
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;