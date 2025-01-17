/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '', // Leave empty if there's no specific port
        pathname: '/**', // Match all paths
      },
    ],
  },
};

module.exports = nextConfig;
