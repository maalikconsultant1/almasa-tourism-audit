/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // KSA ZATCA Audit
      {
        source: '/zatca',
        destination: 'https://tally.so/r/yP4LX4',
        permanent: true,
      },
      // UAE FTA VAT Audit
      {
        source: '/audit',
        destination: 'https://tally.so/r/ODXpKM',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
