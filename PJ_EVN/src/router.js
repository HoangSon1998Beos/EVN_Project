// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

// Vue.use(Router)
const routes = [
    {
        path: '',
        name: 'Home',
        component: () => import('./components/HelloWorld.vue'),
    },
    {
        path: '/login',
        name: 'Home',
        component: () => import('./components/Login.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;