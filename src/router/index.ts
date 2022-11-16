// noinspection TypeScriptValidateTypes

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {name: 'index', path: '/', component: () => import('../views/index.vue')},
    {name: 'expanding-cards', path: '/expanding-cards', component: () => import('../views/expanding-cards/index.vue')},
    {name: 'progress-steps', path: '/progress-steps', component: () => import('../views/progress-steps/index.vue')},
    {
        name: 'rotating-nav-animation',
        path: '/rotating-nav-animation',
        component: () => import('../views/rotating-nav-animation/index.vue')
    },
    //{ name: '关于', path: '/about', component: () => import('../pages/About.vue')}
]
// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes //路由表
})

export default router