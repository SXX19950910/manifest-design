import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import components from './modules/components';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        components,
    },
    // @ts-ignore
    getters,
});
//# sourceMappingURL=index.js.map