/** @type {import('next').NextConfig} */
module.exports = {
  // images: {
  //   loader: 'custom',
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        // port: '',
        pathname: '/**',
      },
    ],
  },
}
