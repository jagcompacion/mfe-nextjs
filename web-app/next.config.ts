import type { NextConfig } from "next";

const DEVICE_APP_URL = process.env.DEVICE_APP_URL || "http://localhost:3001";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/device/:path*",
          destination: `${DEVICE_APP_URL}/device/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
