/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.ctfassets.net',
            'www.backmarket.com',
            'q1p0.ldn.idrivee2-61.com',
            'qnc-online.nyc3.digitaloceanspaces.com',
            'images.unsplash.com',
        ],
        remotePatterns: [{
            protocol: 'https',
            hostname: 'qnconline.lon1.digitaloceanspaces.com',
            port: '',
            pathname: '/qnconline/static/products/images/**', // Allow all images in this path
        }, {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
        }],
    },
};

export default nextConfig;