module.exports = {
  env: {
    OWNER: 'JotaScript',
  },
  async redirects() {
    return [
      {
        source: '/blog/post',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}
