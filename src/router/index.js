import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/task/new',
        name: 'TaskNewPage',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/TaskNewPage.vue')
    },
    {
        path: '/task/:id(\\d+)',
        name: 'TaskViewPage',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/TaskViewPage.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/errorPage/404')
    },
    { path: '*', redirect: '/404'}
];

const router = new VueRouter({
    routes
});

export default router;
