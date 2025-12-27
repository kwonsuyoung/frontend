import { createApp, h } from 'vue'

// 컴포넌트 파일 대신, 직접 "안녕"이라는 글자를 그리게 함
const app = createApp({
  render: () => h('h1', 'Vue가 작동 중입니다!')
})

app.mount('#app')