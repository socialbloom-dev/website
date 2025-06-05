/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.socialbloom.io',
        permanent: true,
      },
      {
        source: '/post/best-outbound-lead-generation-agency', // Specific source path
        destination: 'https://blog.socialbloom.io/post/best-clay-agencies', // Specific destination path
        permanent: true,
      },
      {
        source: '/post/:slug*', // General dynamic rule, placed after specific rules
        destination: 'https://blog.socialbloom.io/post/:slug*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
