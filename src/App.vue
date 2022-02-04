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
        selected: '',
        quarterTime: 10
      },
      homeTeam: {
        name: 'Miami Heat',
        score: 10,
        logoUrl: '#'
      },
      awayTeam: {
        name: 'Los Angeles Lakers',
        score: 12,
        logoUrl: '#'
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
