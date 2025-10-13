import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://sharelister-backend.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
