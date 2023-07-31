/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  pageExtensions: ['tsx'],
  experimental: {
    forceSwcTransforms: true,
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(`${__dirname}/src/`)

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'prefixIds',
                  active: false,
                },
              ],
            },
          },
        },
        { loader: 'url-loader' },
      ],
    })

    return config
  },
}
