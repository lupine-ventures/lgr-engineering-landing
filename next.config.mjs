/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.tapplanaustin.com",
          },
        ],
        destination: "https://lrgengineering.com/tap-plans",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
