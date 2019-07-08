const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withImages(
  withSass({
    webpack: config => {
      config.node = {
        fs: 'empty'
      }
      return config
    }
  })
)
