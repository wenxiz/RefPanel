export const myMixin = {
  methods: {
    formatTime (time) {
      let min = Math.floor(time / 60)
      let sec = ('0' + Math.floor(time % 60)).slice(-2)

      return `${min} : ${sec}`
    },
    run_timer () {
      if (this.formattedTime <= 0) {
        clearInterval(this.timer)
        this.disable = false
      } else {
        this.formattedTime = (this.formattedTime - 0.1).toFixed(1)
        if (this.formattedTime > 60) {
          this.quarterInfo.quarterTime = this.formatTime(this.formattedTime)
        } else {
          this.quarterInfo.quarterTime = this.formattedTime
        }
      }
    }
  }
}
