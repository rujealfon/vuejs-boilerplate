module.exports = {
  lintOnSave: true,

  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });

    config.plugin("stylelint").use("stylelint-webpack-plugin", [
      {
        files: [
          "src/assets/**/*.{s?(a|c)ss,less,stylus}",
          "{components,views}/**/*.vue"
        ],
        fix: true
      }
    ]);
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/_mixins.scss"; @import "~@/assets/scss/_variables.scss";`
      }
    }
  }
};
