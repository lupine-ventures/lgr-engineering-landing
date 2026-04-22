/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        has: [
          {
            type: "host",
            value: "www.tapplanaustin.com",
          },
        ],
        destination: "https://lrgengineering.com/favicon.ico",
        permanent: true,
      },
      {
        source: "/favicon.ico",
        has: [
          {
            type: "host",
            value: "tapplanaustin.com",
          },
        ],
        destination: "https://lrgengineering.com/favicon.ico",
        permanent: true,
      },
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
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tapplanaustin.com",
          },
        ],
        destination: "https://lrgengineering.com/tap-plans",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
