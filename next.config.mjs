/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'images.ctfassets.net',
        'qnconline.lon1.digitaloceanspaces.com',
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'qnconline.lon1.digitaloceanspaces.com',
          port: '',
          pathname: '/qnconline/static/products/images/**', // Allow all images in this path
        },
      ],
    },
  };
  
  export default nextConfig;
  