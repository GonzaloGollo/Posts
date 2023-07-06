/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true
    },
    reactStrictMode:true,
}

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false
            }
        }

        return config;
    },
    images: {
            domains: ['avatar.dicebear.com'],
    },
}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.example.com',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  }