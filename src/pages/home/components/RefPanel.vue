<template>
  <div class="panel">
    <div class="addPts">
      <button @click="handlePtsClick(homeTeam, 1)">+1</button>
      <button @click="handlePtsClick(homeTeam, 2)">+2</button>
      <button @click="handlePtsClick(homeTeam, 3)">+3</button>
    </div>
    <div class="control">
      <button
        id="pause"
        @click="handlePauseClick"
      >Pause</button>
      <div class="select">
        <span>Quarter</span>
        <select v-model="quarterInfo.selected">
          <option disabled value="">Select</option>
          <option
            v-for="item in quarterInfo.quarter"
            :key="item.index">{{ item }}</option>
        </select>
      </div>
      <button id="start"
        @click="handleStartClick"
        :disabled='disabled'
      ><span class="iconfont select iconPlay">&#xe68a;</span>Start</button>
      <button
        id="undo"
        @click="handleUndoClick"
      >Undo</button>
    </div>
    <div class="addPts">
      <button @click="handlePtsClick(awayTeam, 1)">+1</button>
      <button @click="handlePtsClick(awayTeam, 2)">+2</button>
      <button @click="handlePtsClick(awayTeam, 3)">+3</button>
    </div>
    {{this.quarterInfo.quarterTime}}
  </div>
</template>

<script>
import { myMixin } from '@/pages/mixins.js'

export default {
  name: 'RefPanel',
  props: {
    quarterInfo: Object,
    homeTeam: Object,
    awayTeam: Object
  },
  mixins: [myMixin],
  data () {
    return {
      disabled: false,
      pause: false,
      timer: 0
    }
  },
  methods: {
    handleStartClick () {
      this.disabled = true
      // counter
      this.timer = setInterval(this.run_timer, 100)
    },
    handlePauseClick () {
      const pauseBtn = document.querySelector('#pause')

      if (this.disabled === true) {
        if (!this.pause) {
          this.pause = true
          pauseBtn.innerHTML = 'Resume'
          clearInterval(this.timer)
        } else {
          this.pause = false
          pauseBtn.innerHTML = 'Pause'
          this.timer = setInterval(this.run_timer, 100)
        }
      }
    },
    handlePtsClick (team, pts) {
      // record each action
      this.action.push({team, pts})
      team.score += pts
      console.log(this.action)
    },
    handleUndoClick () {
      if (this.action.length !== 0) {
        // undo scores
        const lastAction = this.action[this.action.length - 1]
        lastAction.team.score -= lastAction.pts
        // remove action from this.action
        this.action.pop()
      } else {
        alert('There is nothing you can undo!')
      }
    }
  }
}
</script>

<style scoped>
  .panel {
    width: 100%;
    height: 15rem;
    border: 5px solid red;
    border-radius: 1rem;
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  .addPts, .control {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  button {
    width: 7rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  .select {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .iconPlay {
    margin-left: -.5rem;
    margin-right: 1.2rem;
  }
</style>
