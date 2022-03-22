import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // no async actions, so directly use 'commit' in components
  // actions: {
  //   changeHomeTeam (ctx, homeTeam) {
  //     ctx.commit('changeHomeTeam', homeTeam)
  //   },
  //   changeAwayTeam (ctx, awayTeam) {
  //     ctx.commit('changeAwayTeam', awayTeam)
  //   }
  // },
  mutations
})
