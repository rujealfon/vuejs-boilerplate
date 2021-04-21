module.exports = {
  lintOnSave: true,

  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });

    // https://vue-loader.vuejs.org/guide/linting.html#stylelint
    config.plugin("stylelint").use("stylelint-webpack-plugin", [
      {
        files: [
          "src/assets/**/*.{s?(a|c)ss,less,stylus}",
          "src/{components,views}/**/*.vue"
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
