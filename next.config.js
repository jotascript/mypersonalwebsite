module.exports = {
  env: {
    OWNER: 'JotaScript',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/blog/post',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}
