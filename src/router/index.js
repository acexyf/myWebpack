import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode:'hash',
    base: '/',
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    },{
        path: '/list',
        name: 'list',
        component: () => import( /* webpackChunkName: "list" */ '../views/list/index.vue'),
    },{
        path: '/detail',
        name: 'detail',
        component: () => import( /* webpackChunkName: "detail" */ '../views/detail/index.vue'),
    }]
})


export default router