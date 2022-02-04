<template>
  <div id="app">
    <!-- <router-view/> -->
    <show-score
      :quarterInfo="quarterInfo"
    ></show-score>
    <ref-panel
      :quarterInfo="quarterInfo"
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
        quarterTime: 10
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
