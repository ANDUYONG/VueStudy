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
            path: '/work2/prop_parent',
            component: () => import('@/work2/prop_parent.vue'),
        },
        {
            path: '/work3/emit_parent',
            component: () => import('@/work3/emit_parent.vue'),
        },
        {
            path: '/work4/parent',
            component: () => import('@/work4/parent.vue'),
        },
        {
            path: '/work5/menutable',
            component: () => import('@/work5/menutable.vue'),
        },
        {
            path: '/work6/rowclick_parent',
            component: () => import('@/work6/rowclick_parent.vue'),
        },
        {
            path: '/work7/cellclick_parent',
            component: () => import('@/work7/cellclick_parent.vue'),
        },
    ],
});