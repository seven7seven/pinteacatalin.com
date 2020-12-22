const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'stylesheets')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{
                uniqueID: require('svgo-unique-id'),
              }]
            }
          },
        },
      ],
    });

    return config;
  },
}
