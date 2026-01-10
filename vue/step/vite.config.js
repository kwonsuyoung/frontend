import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 1. path 모듈 추가

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 2. 에러 메시지에서 요구한대로 'vue'를 특정 경로로 연결(Alias) 설정
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  }
})