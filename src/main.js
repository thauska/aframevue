import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import 'aframe'

Vue.config.ignoredElements = [
  'a-scene',
  'a-assets',
  'a-box',
  'a-cylinder',
  'a-text',
  'a-sphere',
  'a-plane',
  'a-sky',
  'a-camera',
  'a-cursor',
  'a-entity'
]

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
