/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '', // Optional, leave empty for default ports (80 for http and 443 for https)
                pathname: '/**', // Allow all paths under this domain
            },
        ],
    },
  };
  
  export default nextConfig;
  