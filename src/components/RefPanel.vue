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
    <button id="puase">Puase</button>
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
export default {
  name: 'RefPanel',
  props: {
    quarterInfo: Object
  },
  data () {
    return {
      selected: [],
      disabled: false
    }
  },
  methods: {
    handleStartClick () {
      let quarterTime = this.quarterInfo.quarterTime

      // formating time
      function formatTime (time) {
        let min = Math.floor(time / 60)
        let sec = ('0' + Math.floor(time % 60)).slice(-2)

        return `${min} : ${sec}`
      }

      // counter
      let timer = setInterval(() => {
        this.disabled = true
        if (quarterTime > 0) {
          quarterTime = (quarterTime - 0.1).toFixed(1)
          if (quarterTime < 60) {
            this.quarterInfo.quarterTime = quarterTime
          } else {
            this.quarterInfo.quarterTime = formatTime(quarterTime)
          }
        } else {
          clearInterval(timer)
          this.disabled = false
          quarterTime = 720
        }
      }, 100)
    }
  }
}
</script>
