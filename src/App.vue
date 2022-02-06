<template>
  <div id="app">
    <!-- <router-view/> -->
    <show-score
      :quarterInfo="quarterInfo"
      :homeTeam="homeTeam"
      :awayTeam="awayTeam"
    ></show-score>
    <ref-panel
      :quarterInfo="quarterInfo"
      :homeTeam="homeTeam"
      :awayTeam="awayTeam"
    ></ref-panel>
  </div>
</template>

<script>
import RefPanel from './components/RefPanel.vue'
import ShowScore from './components/ShowScore.vue'

export default {
  name: 'App',
  components: {
    ShowScore,
    RefPanel
  },
  data () {
    return {
      quarterInfo: {
        quarter: [1, 2, 3, 4],
        selected: '1',
        quarterTime: 61
      },
      homeTeam: {
        name: 'Miami Heat',
        score: 10,
        logoUrl: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/g=0;w=268/sign=3cc44a4e3af33a878e6d0511b161220e/34fae6cd7b899e51e64ef36a42a7d933c9950d88.jpg'
      },
      awayTeam: {
        name: 'Los Angeles Lakers',
        score: 12,
        logoUrl: 'https://img0.baidu.com/it/u=1966218152,3607118776&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=300'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
