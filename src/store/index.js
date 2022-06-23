import { addAnimal, deleteAnimal, getInsect } from '@/fetch'
import { createStore } from 'vuex'

export default createStore({
  state: {
    insects: []
  },
  getters: {
    getInsects({ insects }) {
      return insects
    }
  },
  mutations: {
    SET_INSECTS(state, payload) {
      state.insects = payload
    }
  },
  actions: {
    setInsects({ commit }, value) {
      commit('SET_INSECTS', value)
    },
    async fetchData({ commit },search) {
      const data = await getInsect({search:search})
      commit('SET_INSECTS', data.data)
    },
    async deleteAnimal({ commit, dispatch }, id) {
      const data = await deleteAnimal(id)
      await dispatch('fetchData');
    },
    async addAnimal({ commit, dispatch }, data) {
      await addAnimal(data.name, data.des)
      await dispatch('fetchData');

    }
  },
  modules: {
  }
})
