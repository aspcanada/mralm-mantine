/** @type {import('next').NextConfig} */
module.exports = {
  // images: {
  //   loader: 'custom',
  // },
  // theme: {
  //   container: {
  //     center: true,
  //     padding: '2rem',
  //   },
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
