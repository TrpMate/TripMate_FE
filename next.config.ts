import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://tripmate-be.shop/:path*',
      },
    ]
  },
}

export default nextConfig
