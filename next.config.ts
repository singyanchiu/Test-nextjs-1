import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Test-nextjs-1",
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  }
  /* config options here */
};

export default nextConfig;
