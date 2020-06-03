import Vue from 'vue'

import App from './App.vue'

import router from './router'
import './common/App.css'

if(module && module.hot) {
    module.hot.accept()
}


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})







