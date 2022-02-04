export const myMixin = {
  methods: {
    formatTime (time) {
      let min = Math.floor(time / 60)
      let sec = ('0' + Math.floor(time % 60)).slice(-2)

      return `${min} : ${sec}`
    },
    runTimer (time) {
      console.log(time)
      // if (time > 0) {
      //   time = (time - 0.1).toFixed(1)
      //   if (time < 60) {
      //     this.quarterInfo.quarterTime = time
      //   } else {
      //     clearInterval(this.timer)
      //     this.quarterInfo.quarterTime = 720
      //   }
      // }
    }
  }
}
