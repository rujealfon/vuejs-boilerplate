module.exports = {
	devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },

  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}