module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/tool-box/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {},
  productionSourceMap: false,
}
