/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Allow the application to be deployed to any domain
  basePath: '',
  trailingSlash: false,
  // External packages that need to be transpiled
  serverExternalPackages: ['mongoose', 'better-sqlite3'],
};

export default nextConfig; 