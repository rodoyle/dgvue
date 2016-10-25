import {types} from './modules'
import { crud, auth } from './api'

export const actions = {
  exampleAction (store, payload) {
    store.dispatch('fetchUser')

    crud.create('item', { property: payload })
  },

  async fetchUser ({ commit }) {
    var user = await auth.verify()
    commit(types.user.SET, user)
  }
}
