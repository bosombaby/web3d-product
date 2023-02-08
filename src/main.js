import { createApp } from 'vue'
import './assets/style/reset.css'
import App from './App.vue'

const app = createApp(App)

// 存储管理
import { registerStore } from '@/store/'

// 图标管理
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

registerStore(app)
app.mount('#app')
