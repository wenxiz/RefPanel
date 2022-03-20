export const myMixin = {
  data () {
    return {
      action: []
    }
  },
  methods: {
    formatTime (time) {
      let min = Math.floor(time / 60)
      let sec = ('0' + Math.floor(time % 60)).slice(-2)

      return `${min} : ${sec}`
    },
    run_timer () {
      if (this.quarterInfo.quarterTime <= 0) {
        clearInterval(this.timer)
        this.disabled = false
        this.quarterInfo.quarterTime = 10
        this.quarterInfo.selected > 4 ? alert('Game is finished!') : this.quarterInfo.selected++
      } else {
        this.quarterInfo.quarterTime = (this.quarterInfo.quarterTime - 0.1).toFixed(1)
        if (this.quarterInfo.quarterTime > 60) {
          this.quarterInfo.formattedTime = this.formatTime(this.quarterInfo.quarterTime)
        } else {
          this.quarterInfo.formattedTime = this.quarterInfo.quarterTime
        }
      }
    }
  }
}
