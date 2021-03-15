import Vue from 'vue'
import App from './App.vue'
import VueSpeech from 'vue-speech'

Vue.config.productionTip = false

Vue.use(VueSpeech)
new Vue({
  render: h => h(App),
}).$mount('#app')
