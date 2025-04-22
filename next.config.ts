import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.arcelormittal.com',
        port: '',
        pathname: '/siteelements/**',
      },
      {
        protocol: 'https',
        hostname: 'img.elo7.com.br',
        port: '',
        pathname: '/product/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.leroymerlin.com.br',
        pathname: '/products/**',
      },
      {protocol: 'https', hostname: 'static.wixstatic.com'},
      {protocol: 'https', hostname: 'www.ferroviariaonline.com.br', pathname: '/image/**'},
      {protocol: 'https', hostname: 'm.media-amazon.com', pathname: '/images/**'},
      {protocol: 'https', hostname: 'example.com', pathname: '/**'},
      {protocol: 'https', hostname: 'placehold.co', pathname: '/**'},
    ],
  },
};

export default nextConfig;
