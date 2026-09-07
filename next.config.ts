import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "zibahcreations.vercel.app",
          },
        ],
        destination: "https://zibahcreations.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zibahcreations.com",
          },
        ],
        destination: "https://zibahcreations.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;