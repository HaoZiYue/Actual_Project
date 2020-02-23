 let path = require('path');
 const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   //根据设置的值
})
 function resolve (dir) {
  return path.join(__dirname, dir)
}
 module.exports = {
  runtimeCompiler: true,
  lintOnSave:false,
  devServer:{
    open:true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        // ws: true,
        // changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/wangyi':{
        target:"https://m.you.163.com",
        pathRewrite:{
          '^/wangyi':''
        }
      }
    }
  },
  configureWebpack:{//与webpack相关的配置写在这里
    resolve:{//解析
      extensions: [".js", ".json",".vue"],//自动解析以这些为扩展名的文件
      alias:{
        '@':resolve('src'),// 设置文件查找路径，可简写文件查找路径
      }
    }
  },
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}