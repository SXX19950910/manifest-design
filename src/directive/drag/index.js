import drag from './drag'
import Vue from 'vue'
const install = function(Vue) {
  Vue.directive('drag', drag)
}

if (window.Vue) {
  window['drag'] = drag
}
Vue.use(install)

drag.install = install
export default drag
