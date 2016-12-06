import Vue from 'vue'
import Vuex from 'vuex'

import {modules} from './modules'
import {actions} from './actions'

Vue.use(Vuex)

// Create the store
var store = new Vuex.Store({
  actions
})

for (let name in modules) {
  store.registerModule(name, modules[name])
}

export default store
