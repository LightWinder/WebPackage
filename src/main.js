import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import './index.css'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
