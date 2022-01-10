import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/reset.css'
import router from './router/router'



import {store} from './store/index'
// import store from './store/index'

const app = createApp(App)
app.use(router).use(store).mount('#app')




window['router'] = router
