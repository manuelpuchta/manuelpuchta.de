module.exports = {
  trailingSlash: true,
  images: {
    loader: 'custom',
  },
  publicRuntimeConfig: {
    host: process.env.HOST,
  },
};
