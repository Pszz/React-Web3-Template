import { defineConfig } from 'umi';

export default defineConfig({
  title: 'App Name',
  favicon: '/favicon.ico',
  fastRefresh: {},
  antd: false,
  terserOptions: {
    compress: {
      drop_console: true,
    },
  },
  dva: {
    hmr: true,
    immer: true,
  },
  manifest: {
    writeToFileEmit: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  lessLoader: {
    modifyVars: {
      // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      hack: `true; @import "~@/assets/less/mixins.less";`,
    },
  },
});
