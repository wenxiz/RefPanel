<template>
  <div>
    <div class="home">
      <button>+1</button>
      <button>+2</button>
      <button>+3</button>
    </div>
    <div class="away">
      <button>+1</button>
      <button>+2</button>
      <button>+3</button>
    </div>
    <button
      id="puase"
      @click="handlePauseClick"
    >Pause</button>
    <div class="select">
      <span>Quarter</span>
      <select v-model="selected">
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
  </div>
</template>

<script>
import { myMixin } from './mixins.js'

export default {
  name: 'RefPanel',
  props: {
    quarterInfo: Object
  },
  mixins: [myMixin],
  data () {
    return {
      selected: [],
      disabled: false,
      pause: false,
      timer: 0
    }
  },
  methods: {
    handleStartClick () {
      let quarterTime = this.quarterInfo.quarterTime
      this.disabled = true

      // counter
      this.timer = setInterval(this.runTimer(quarterTime), 1000)
    },
    handlePauseClick () {
      let remainingTime = this.quarterInfo.quarterTime
      console.log(remainingTime)
      const pauseBtn = document.querySelector('#puase')

      if (!this.pause) {
        this.pause = true
        pauseBtn.innerHTML = 'Resume'
        clearInterval(this.timer)
      } else {
        this.pause = false
        pauseBtn.innerHTML = 'Pause'
      }
    }
  }
}
</script>
