import 'babel-polyfill'
import '@deskgen/dg-theme'

import Vue from 'vue'
import App from './App'

import router from './router.js'
import store from './data/store'

new Vue(Vue.util.extend({ router, store }, App)).$mount('#app')
