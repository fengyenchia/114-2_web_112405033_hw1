import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/designProject", destination: "/designProjects", permanent: true },
      { source: "/programmingProject", destination: "/programmingProjects", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uxrfpzacouohafjxkwmu.supabase.co', // 換成 Supabase 域名
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
