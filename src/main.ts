import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(YmapPlugin)
app.use(createPinia())
app.use(router)
app.mount('#app')

