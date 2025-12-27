import { createApp } from 'vue'
// import myComponent from './test1'
import Root from './myTest.vue'
//import Sub from './Sub.vue'

var app = createApp(Root)

//app.component('GlobalSub',Sub) 

app.mount('#app')