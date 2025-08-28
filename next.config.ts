import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  serverActions: {
    bodySizeLimit: '4.5mb',
    // Tăng thời gian chờ cho các tác vụ AI chạy dài
    // Mặc định là 15 giây, tăng lên 45 giây.
    serverActions: {
      bodySizeLimit: '4.5mb',
      // Mặc định là 15 giây, tăng lên 45 giây.
      // @ts-ignore
      maxDuration: 45,
    },
  },
};

export default nextConfig;
