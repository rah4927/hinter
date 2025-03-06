import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'], // For MathJax CDN
  },
  // Enable static exports for better performance
  output: 'standalone',
  // Optimize production builds
  poweredByHeader: false,
  compress: true,
  // Cache static assets
  generateEtags: true,
  // Enable source maps in production for better debugging
  productionBrowserSourceMaps: true,
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
