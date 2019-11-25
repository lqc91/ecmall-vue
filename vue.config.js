const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    // server 启动后自动打开浏览器
    open: 'true'
  },
  chainWebpack: (config) => {
    // 配置目录别名
    config.resolve.alias.set('api', resolve('src/api')).set('assets', resolve('src/assets')).set('base', resolve('src/base')).set('components', resolve('src/components')).set('pages', resolve('src/pages'));
  }
};
