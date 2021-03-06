import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here

Vue.use(VueMaterial)
Vue.config.productionTip = false
window.fetchApi = require('./fetchApi.js');
new Vue({
  render: h => h(App),
}).$mount('#app')
