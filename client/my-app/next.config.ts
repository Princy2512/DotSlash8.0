import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'static/fonts/',
        },
      },
    });

    return config;
  },
};

export default nextConfig;