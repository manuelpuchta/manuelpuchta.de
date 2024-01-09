module.exports = {
  images: {
    loader: 'custom',
  },
  output: 'export',
  publicRuntimeConfig: {
    host: process.env.HOST,
  },
  trailingSlash: true,
};
