const { getRedirectStatus } = require('next/dist/lib/load-custom-routes')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

module.export = withMDX({
  pageExtensions: ['mdx', 'jsx', 'js', 'md', 'ts', 'tsx']
})

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'jp'],
    defaultLocale: 'en',
    localeDetection: true
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
    return config
  },
  webpackDevMiddleware: config => {
    return config
  },
  async redirects() {
    return [
      {
        source: '/privacy/southpine-wrappers',
        destination: '/projects/southpine-wrappers#privacy-statement',
        permanent: true
      },
      {
        source: "/updates%20projects/:date*/aas",
        destination: "/projects/always-amazon-smiling",
        permanent: true
      },
      {
        source: "/updates%20projects/:date*/southnode",
        destination: "/projects/southpine-wrappers",
        permanent: true
      },
      {
        source: "/updates%20projects/:date*/southpy",
        destination: "/projects/southpine-wrappers",
        permanent: true
      },
      {
        source: "/updates%20projects/:date*/5mloading",
        destination: "/projects/5mloading",
        permanent: true
      },
      {
        source: "/updates/mello/:slug*",
        destination: "/projects/mello",
        permanent: true
      },
      {
        source: "/updates/swift/:slug*",
        destination: "/projects/swift",
        permanent: true
      },
      {
        source: "/updates/hex/:slug*",
        destination: "/projects/mono",
        permanent: true
      },
      {
        source: "/updates/nano/:slug*",
        destination: "/projects/nano",
        permanent: true
      },

      {
        source: "/updates%20projects/:date*/ppg",
        destination: "https://github.com/doamatto/phone-passcode-gen",
        permanent: true
      },
    ]
  } 
}
