/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static-friendly by default. Pages here are SSG unless they opt into
  // runtime behaviour (only /api/contact does). No custom image loader is
  // needed because real assets are dropped straight into /public.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
