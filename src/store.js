import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxItems: 5,
    totalCount: 0,
    pilotName: 'Trowa',
    mechName: 'Heavy Arms',
  },

  getters: {
    isMax(state, getters) {
      return (state.totalCount >= 5) ? true : false
    },
  },

  mutations: {
    addCount(state) {
      state.totalCount++
    },

    deductCount(state) {
      state.totalCount--
    },

    updateName(state, name) {
      state.pilotName = name
    },

    updateMech(state, name) {
      state.mechName = name
    },

    setPilotData(state, payload) {
      state.pilotName = payload.name,
      state.mechName = payload.gundam
    },
  },

  actions: {
    loadPilotData(context, payload) {
      axios.get('/static/pilotdata.json').then((response) => {
        console.log(response.data)
        context.commit('setPilotData', response.data[1])
      }).catch((error) => {
        console.log('error: ' + error)
      })
    },
  },
})