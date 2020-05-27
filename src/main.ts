import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import directive from './directive';
// @ts-ignore
import components from '@/components/map.js';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.scss';
Vue.use(ElementUI);
directive.map((item: any) => Vue.use(item));
components.map((item: any) => Vue.component(item.id, item.component));
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
