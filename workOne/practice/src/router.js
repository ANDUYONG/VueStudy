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
            path: '/work1/fullName',
            component: () => import('@/work1/fullName.vue'),
        },
        {
            path: '/work1/prop_parent',
            component: () => import('@/work1/prop_parent.vue'),
        },
        {
            path: '/work1/emit_parent',
            component: () => import('@/work1/emit_parent.vue'),
        },
    ],
});