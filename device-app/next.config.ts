import type { NextConfig } from "next";

const WEBAPP_URL = process.env.WEBAPP_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/webapp/:path*",
          destination: `${WEBAPP_URL}/webapp/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
