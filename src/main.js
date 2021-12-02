import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from './router'

let vueApp = createApp(App)

vueApp.use(VueRouter)

vueApp.mount('#app')
