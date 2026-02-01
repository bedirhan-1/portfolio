/** @type {import('next').NextConfig} */

const nextConfig = {
  // Turbopack configuration (default in Next.js 16)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
