import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeTeam: {
      id: 1,
      name: 'Qilihe Clippers',
      score: 0,
      logoUrl: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/g=0;w=268/sign=3cc44a4e3af33a878e6d0511b161220e/34fae6cd7b899e51e64ef36a42a7d933c9950d88.jpg'
    },
    awayTeam: {
      id: 1,
      name: 'Anning Hangke',
      score: 0,
      logoUrl: 'https://img0.baidu.com/it/u=1966218152,3607118776&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=300'
    }
  },
  // no async actions, so directly use 'commit' in components
  // actions: {
  //   changeHomeTeam (ctx, homeTeam) {
  //     ctx.commit('changeHomeTeam', homeTeam)
  //   },
  //   changeAwayTeam (ctx, awayTeam) {
  //     ctx.commit('changeAwayTeam', awayTeam)
  //   }
  // },
  mutations: {
    changeHomeTeam (state, homeTeam) {
      state.homeTeam.name = homeTeam
    },
    changeAwayTeam (state, awayTeam) {
      state.awayTeam.name = awayTeam
    }
  }
})
