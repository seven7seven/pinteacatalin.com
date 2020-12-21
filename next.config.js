const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'stylesheets')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      ({resource}) => ({
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [{
              "cleanupIDs": {
                "prefix": `svg${hash(relative(context, resource))}`
              }
            }]
          }
        }
      })
    });

    return config;
  },
}
