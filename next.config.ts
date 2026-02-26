import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
];

const nextConfig: NextConfig = {
  // Enable React compiler for better performance
  // reactCompiler: true,

  // No trailing slashes for canonical URL consistency
  trailingSlash: false,

  // Compression for smaller bundles
  compress: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Security headers for all routes
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // Redirects for SEO (www to non-www or vice versa)
  async redirects() {
    return [
      // Redirect common typos or old URLs if needed
      // {
      //     source: '/yoga-teacher-training',
      //     destination: '/courses/200-hour-yoga-ttc',
      //     permanent: true,
      // },
    ];
  },

  // Enable experimental features for better performance
  // Note: optimizeCss is disabled due to Tailwind CSS v3 + Turbopack compatibility
  // Re-enable when upgrading to Tailwind CSS v4 or using webpack bundler
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
