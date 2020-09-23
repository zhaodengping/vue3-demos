import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

let app=createApp(App)

app.config.globalProperties.boo='21'


app.mount('#app')
