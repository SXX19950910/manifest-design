import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Edit from '../views/edit/Index.vue';
import List from '../views/list/Index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
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
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
