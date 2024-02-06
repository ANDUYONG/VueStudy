import { createRouter, createWebHistory } from 'vue-router';

// import Home from './Home.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./Home.vue'),
        },
        {
            path: '/example/parent',
            component: () => import('@/example/parent.vue'),
        },
        {
            path: '/family/parent',
            component: () => import('@/family/parent.vue'),
        },
    ],
});