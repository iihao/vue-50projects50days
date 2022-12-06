// noinspection TypeScriptValidateTypes

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name: 'index',
        path: '/',
        component: () => import('../views/index.vue')
    },
    {
        name: 'expanding-cards',
        path: '/expanding-cards',
        component: () => import('../views/expanding-cards/index.vue')
    },
    {
        name: 'progress-steps',
        path: '/progress-steps',
        component: () => import('../views/progress-steps/index.vue')
    },
    {
        name: 'rotating-nav-animation',
        path: '/rotating-nav-animation',
        component: () => import('../views/rotating-nav-animation/index.vue')
    },
    {
        name: 'hidden-search',
        path: '/hidden-search',
        component: () => import('../views/hidden-search/index.vue')
    },
    {
        name: 'blurry-loading',
        path: '/blurry-loading',
        component: () => import('../views/blurry-loading/index.vue')
    },
    {
        name: 'scroll-animation',
        path: '/scroll-animation',
        component: () => import('../views/scroll-animation/index.vue')
    },
    {
        name: 'split-landing-page',
        path: '/split-landing-page',
        component: () => import('../views/split-landing-page/index.vue')
    },
    {
        name: 'form-input-wave',
        path: '/form-input-wave',
        component: () => import('../views/form-input-wave/index.vue')
    },
    {
        name: 'sound-board',
        path: '/sound-board',
        component: () => import('../views/sound-board/index.vue')
    },
    {
        name: 'dad-jokes',
        path: '/dad-jokes',
        component: () => import('../views/dad-jokes/index.vue')
    },
    {
        name: 'event-keycodes',
        path: '/event-keycodes',
        component: () => import('../views/event-keycodes/index.vue')
    },
    {
        name: 'faq-collapse',
        path: '/faq-collapse',
        component: () => import('../views/faq-collapse/index.vue')
    },
    {
        name: 'random-choice-picker',
        path: '/random-choice-picker',
        component: () => import('../views/random-choice-picker/index.vue')
    },
    {
        name: 'animated-navigation',
        path: '/animated-navigation',
        component: () => import('../views/animated-navigation/index.vue')
    },
    {
        name: 'incrementing-counter',
        path: '/incrementing-counter',
        component: () => import('../views/incrementing-counter/index.vue')
    },
    {
        name: 'drink-water',
        path: '/drink-water',
        component: () => import('../views/drink-water/index.vue')
    },
    {
        name: 'movie-app',
        path: '/movie-app',
        component: () => import('../views/movie-app/index.vue')
    },
    {
        name: 'background-slider',
        path: '/background-slider',
        component: () => import('../views/background-slider/index.vue')
    },
    {
        name: 'theme-clock',
        path: '/theme-clock',
        component: () => import('../views/theme-clock/index.vue')
    },
    {
        name: 'button-ripple-effect',
        path: '/button-ripple-effect',
        component: () => import('../views/button-ripple-effect/index.vue')
    },
    {
        name: 'drag-n-drop',
        path: '/drag-n-drop',
        component: () => import('../views/drag-n-drop/index.vue')
    },
    {
        name: 'drawing-app',
        path: '/drawing-app',
        component: () => import('../views/drawing-app/index.vue')
    },
    {
        name: 'kinetic-loader',
        path: '/kinetic-loader',
        component: () => import('../views/kinetic-loader/index.vue')
    },
    {
        name: 'content-placeholder',
        path: '/content-placeholder',
        component: () => import('../views/content-placeholder/index.vue')
    },
    {
        name: 'sticky-navigation',
        path: '/sticky-navigation',
        component: () => import('../views/sticky-navigation/index.vue')
    },
    {
        name: 'double-vertical-slider',
        path: '/double-vertical-slider',
        component: () => import('../views/double-vertical-slider/index.vue')
    },
    {
        name: 'toast-notification',
        path: '/toast-notification',
        component: () => import('../views/toast-notification/index.vue')
    },
    {
        name: 'github-profiles',
        path: '/github-profiles',
        component: () => import('../views/github-profiles/index.vue')
    },
    {
        name: 'double-click-heart',
        path: '/double-click-heart',
        component: () => import('../views/double-click-heart/index.vue')
    },
    {
        name: 'auto-text-effect',
        path: '/auto-text-effect',
        component: () => import('../views/auto-text-effect/index.vue')
    },
    {
        name: 'password-generator',
        path: '/password-generator',
        component: () => import('../views/password-generator/index.vue')
    },
    {
        name: 'good-cheap-fast',
        path: '/good-cheap-fast',
        component: () => import('../views/good-cheap-fast/index.vue')
    },
    {
        name: 'notes-app',
        path: '/notes-app',
        component: () => import('../views/notes-app/index.vue')
    },
    {
        name: 'animated-countdown',
        path: '/animated-countdown',
        component: () => import('../views/animated-countdown/index.vue')
    },
    //{ name: '关于', path: '/about', component: () => import('../pages/About.vue')}
]
// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(),
    routes //路由表
})

export default router