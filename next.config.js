/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better SEO
  trailingSlash: true,
};

module.exports = nextConfig;
