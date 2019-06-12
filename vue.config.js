const path = require("path");
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('svg'); // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('assets/icon')) // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });

    /* ... */

    if (process.env.NODE_ENV === "production") {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
      }
    } else {
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/assets/style/preset.scss';`
      }
    }
  }
};
