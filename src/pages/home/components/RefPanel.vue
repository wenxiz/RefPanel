<template>
  <div class="panel">
    <div class="addPts">
      <button
        @click="handlePtsClick(homeTeam, 1)"
        >+1</button>
      <button
        @click="handlePtsClick(homeTeam, 2)"
        >+2</button>
      <button
        @click="handlePtsClick(homeTeam, 3)"
        >+3</button>
    </div>
    <div class="control">
      <div class="timeLeft">
        <label for="timeLeft">Time Left:</label>
        <input
          type="text"
          v-model="quarterInfo.quarterTime" />
    </div>
      <div class="select">
        <span>Quarter</span>
        <select v-model="quarterInfo.selected">
          <option disabled value="">Select</option>
          <option
            v-for="item in quarterInfo.quarter"
            :key="item.index">{{ item }}</option>
        </select>
      </div>
      <button
        id="pause"
        @click="handlePauseClick"
        :disabled="pause_disabled"
      >Pause</button>
      <button id="start"
        @click="handleStartClick"
        :disabled='start_disabled'
      ><span class="iconfont select iconPlay">&#xe68a;</span>Start</button>
      <button
        id="undo"
        @click="handleUndoClick"
      >Undo</button>
    </div>
    <div class="addPts">
      <button
        @click="handlePtsClick(awayTeam, 1)"
        >+1</button>
      <button
        @click="handlePtsClick(awayTeam, 2)"
        >+2</button>
      <button
        @click="handlePtsClick(awayTeam, 3)"
        >+3</button>
    </div>
  </div>
</template>

<script>
import { myMixin } from '@/pages/mixins.js'
import { mapState } from 'vuex'

export default {
  name: 'RefPanel',
  props: {
    quarterInfo: Object
  },
  mixins: [myMixin],
  data () {
    return {
      start_disabled: false,
      pause: false,
      pause_disabled: true,
      timer: 0
    }
  },
  methods: {
    handleStartClick () {
      this.start_disabled = true
      this.pause_disabled = false
      // counter
      this.timer = setInterval(this.run_timer, 100)
    },
    handlePauseClick () {
      const pauseBtn = document.querySelector('#pause')

      if (this.start_disabled === true) {
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
      // useful when click 'Start Button'
      if (this.start_disabled === true) {
        // record each action
        this.action.push({team, pts})
        team.score += pts
        console.log(this.action)
      }
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
  },
  computed: {
    ...mapState(['homeTeam', 'awayTeam'])
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
  .timeLeft, .select {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .iconPlay {
    margin-left: -.5rem;
    margin-right: 1.2rem;
  }
</style>
