import Vue from 'vue'
import Vuex from 'vuex'

import {modules} from './modules'
import {actions} from './actions'

Vue.use(Vuex)

// Create the store
var store = new Vuex.Store({
  actions,
  getters: {
    userEmail: state => state.user.email
  }
})

for (let name in modules) {
  store.registerModule(name, {
    mutations: modules[name].mutations,
    state: modules[name].state,
    getters: modules[name].getters
  })
}

export default store
