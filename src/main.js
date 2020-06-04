import Vue from 'vue'

import App from './App.vue'

import { join } from 'lodash';

import router from './router'
import './common/App.css'

if(module && module.hot) {
    module.hot.accept()
}

console.log(join(['1','2'], ','))

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})







