<template>
  <div>
    <div class="home">
      <button @click="handlePtsClick(homeTeam, 1)">+1</button>
      <button @click="handlePtsClick(homeTeam, 2)">+2</button>
      <button @click="handlePtsClick(homeTeam, 3)">+3</button>
    </div>
    <div class="away">
      <button @click="handlePtsClick(awayTeam, 1)">+1</button>
      <button @click="handlePtsClick(awayTeam, 2)">+2</button>
      <button @click="handlePtsClick(awayTeam, 3)">+3</button>
    </div>
    <button
      id="puase"
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
    ><span>icon</span>Start</button>
    <button id="undo">Undo</button>
    {{ formattedTime }}
  </div>
</template>

<script>
import { myMixin } from './mixins.js'

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
      timer: 0,
      formattedTime: this.quarterInfo.quarterTime
    }
  },
  methods: {
    handleStartClick () {
      this.disabled = true
      // counter
      this.timer = setInterval(this.run_timer, 100)
    },
    handlePauseClick () {
      const pauseBtn = document.querySelector('#puase')

      if (!this.pause) {
        this.pause = true
        pauseBtn.innerHTML = 'Resume'
        clearInterval(this.timer)
      } else {
        this.pause = false
        pauseBtn.innerHTML = 'Pause'
        this.timer = setInterval(this.run_timer, 100)
      }
    },
    handlePtsClick (team, pts) {
      team.score += pts
    }
  }
}
</script>
