import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import Home from '@/pages/home'
import Artiset from '@/pages/artiset'
import Listcate from '@/pages/listcate'
import Ucenter from '@/pages/ucenter'
import Search from '@/pages/search'
import HotList from '../pages/musicList/hot_list.vue'
import KingList from '../pages/musicList/king_list.vue'
import NewsList from '../pages/musicList/news_list.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: index,
        children: [{
            path: '',
            redirect: '/index/home'
        }, {
            path: '/index/home',
            component: Home,
            redirect: '/hotList',
            children: [{
                path: '/hotList',
                component: HotList,
            }, {
                path: '/kingList',
                component: KingList,
            }, {
                path: '/newsList',
                component: NewsList,
            }]
        }, {
            path: '/index/artiset',
            component: Artiset
        }, {
            path: '/index/ucenter',
            component: Ucenter
        }, {
            path: '/index/listcate',
            component: Listcate
        }, {
            path: '/index/search',
            component: Search
        }]
    }]
})