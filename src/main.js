import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {routes} from './assets/js/routes'

let app=createApp(App)
app.use(routes)
app.mount('#app')
