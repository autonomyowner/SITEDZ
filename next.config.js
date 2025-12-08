/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for better SEO
  output: 'export',

  // Optimize images
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better SEO
  trailingSlash: true,
};

module.exports = nextConfig;
