import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'

const app = createApp(App)

app.use(YmapPlugin)
app.use(router)
app.mount('#app')

