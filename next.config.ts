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
    allowedDevOrigins: [
      '3006-idx-studio-1744895138810.cluster-iesosxm5fzdewqvhlwn5qivgry.cloudworkstations.dev'
    ],
  },
};

export default nextConfig;
