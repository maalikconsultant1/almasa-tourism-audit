/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/zatca',
        destination: 'https://tally.so/r/yP4LX4',
        permanent: true,
      },
      {
        source: '/zatca/*',
        destination: 'https://tally.so/r/yP4LX4',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
