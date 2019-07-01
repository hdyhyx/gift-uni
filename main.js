import Vue from 'vue'
import store from './store/index'
import App from './App'

import cuCustom from './colorui/components/cu-custom.vue'
import my from './pages/my/my.vue'
import qrcode from './pages/qrcode/qrcode.vue'
import home from './pages/home/home.vue'
Vue.component('my',my)
Vue.component('qrcode',qrcode)
Vue.component('home',home)
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	  store,
    ...App
})
app.$mount()
