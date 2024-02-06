import { createRouter, createWebHistory } from 'vue-router';

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
            path: '/work1/parent',
            component: () => import('@/work1/parent.vue'),
        },
    ],
});