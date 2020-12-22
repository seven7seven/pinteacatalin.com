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
            svgo: false,
            svgoConfig: {
              plugins: [{
                cleanupIDs: {
                  minify: false,
                }
              }]
            }
          },
        },
      ],
    });

    return config;
  },
}
