import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import { Split } from 'view-design';
import directive from './directive';
// @ts-ignore
import components from '@/components/map.js';
import '@/assets/script/LodopFuncs';
import 'element-ui/lib/theme-chalk/index.css';
import 'view-design/dist/styles/iview.css';
import './style/global.scss';
Vue.use(ElementUI);
Vue.component('vSplit', Split);
directive.map((item) => Vue.use(item));
components.map((item) => Vue.component(item.id, item.component));
Vue.prototype.$eventBus = new Vue();
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map