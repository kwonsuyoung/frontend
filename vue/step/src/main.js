import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './ch12/Home.vue'
import LoginPage from './ch12/Login.vue'
import DetailPage from './ch12/Detail.vue'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/detail/:title', name: 'detail', component: DetailPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// createApp(App).mount('#app')

var app = createApp({})
app.use(router)
app.mount('#app')