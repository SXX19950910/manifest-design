import Vue from 'vue';
import VueRouter from 'vue-router';
import Edit from '../views/edit/Index.vue';
import List from '../views/list/Index.vue';
import Test from '../views/test/Index.vue';
// @ts-ignore
import config from './../../config/index.js';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: 'List',
    },
    {
        path: '/edit',
        name: 'Edit',
        component: Edit,
    },
    {
        path: '/list',
        name: 'List',
        component: List,
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }
];
const router = new VueRouter({
    mode: config.router.mode,
    base: config.router.base,
    routes,
});
export default router;
//# sourceMappingURL=index.js.map