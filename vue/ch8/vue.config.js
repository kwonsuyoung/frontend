const path = require('path');

module.exports = {
  runtimeCompiler: true,
  pages: {
    index: {
      // 엔트리 파일 (main.js)
      entry: 'src/ch8/main.js',
      // 사용할 템플릿 (작성하신 index.html)
      template: 'src/ch8/index.html',
      filename: 'index.html'
    }
  },
  // 현재 위치에서 실행될 때 파일 경로 혼선을 방지
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    }
  }
}