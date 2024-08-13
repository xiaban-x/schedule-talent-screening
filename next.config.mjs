/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/content-creation',
                permanent: true,
            },
            {
                source: '/grass-marketing',
                destination: '/grass-marketing/basic-data',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
