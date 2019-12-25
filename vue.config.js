const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    // server 启动后自动打开浏览器
    open: 'true',
    host: 'localhost',
    port: 8080,
    // 在开发环境下将 API 请求代理到 API 服务器
    proxy: {
      '/mock': {
        // 将以 /mock 开头的路径请求代理到 target
        target: 'http://localhost:8080',
        // 是否代理websockets
        ws: false,
        // 是否将主机头的原点改为目标的 URL
        // changes the origin of the host header to the target URL
        changeOrigin: false
      }
    }
  },
  chainWebpack: (config) => {
    // 配置目录别名
    config.resolve.alias.set('api', resolve('src/api')).set('assets', resolve('src/assets')).set('base', resolve('src/base')).set('components', resolve('src/components')).set('pages', resolve('src/pages'));
  }
};
