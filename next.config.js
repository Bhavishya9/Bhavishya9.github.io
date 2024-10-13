/** @type {import('next').NextConfig} */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nextConfig = {
  output: "export",  // <=== enables static exports
  images: { unoptimized: true },
  // assetPrefix: '',
  basePath: 'https://Bhavishya9.github.io',
  assetPrefix: 'https://Bhavishya9.github.io',
  swcMinify: false, // Disable SWC minification
  // terserMinify: false, // Disable Terser minification (if applicable for older versions)
  webpack: (config, { dev }) => {
    if (!dev) {
      // Disable minification in production
      config.optimization.minimize = false;
      config.plugins.push(
        new HtmlWebpackPlugin({
          minify: false, // Disable HTML minification
        })
      );
    }
    return config;
  },
  // reactStrictMode: true,
  // images: {
  //   domains: ["localhost"],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn.sanity.io",
  //       port: "",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
