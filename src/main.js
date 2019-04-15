// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import store from './store/index'

import VueAwesomeSWiper from 'vue-awesome-swiper' // 引入插件
import 'swiper/dist/css/swiper.css' //引入轮播样式，必须要引入，我就上了这个的亏

Vue.use(VueAwesomeSWiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})