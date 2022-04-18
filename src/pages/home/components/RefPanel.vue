<template>
  <el-row>
    <el-col :xs="6">
      <el-button
        type="info"
        circle
        @click="handlePtsClick(homeTeam, 1)">+1</el-button>
      <el-button
        type="info"
        circle
        @click="handlePtsClick(homeTeam, 2)">+2</el-button>
      <el-button
        type="info"
        circle
        @click="handlePtsClick(homeTeam, 3)">+3</el-button>
    </el-col>
    <el-col :xs="12">
      <el-form>
        <el-form-item label="Time Left:">
          <el-input
            v-model="quarterInfo.quarterTime"
            style="width: 50%">
          </el-input>
        </el-form-item>
        <el-form-item label="Quarter:">
          <el-select v-model="quarterInfo.selected" style="width: 50%">
            <el-option
              v-for="item in quarterInfo.quarter"
              :key="item.index"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-button
            id="start"
            @click="handleStartClick"
            :disabled="start_disabled"
            type="success"><span class="iconfont select iconPlay">&#xe68a;</span>Start</el-button>
        <el-button
            id="pause"
            @click="handlePauseClick"
            :disabled="pause_disabled"
            type="success">Pause</el-button>
        <el-button
            id="undo"
            @click="handleUndoClick"
            type="warning">Undo</el-button>
      </el-form>
    </el-col>
    <el-col :xs="6">
      <el-button
        type="info"
        circle
        @click="handlePtsClick(awayTeam, 1)">+1</el-button>
        <el-button
        type="info"
        circle
        @click="handlePtsClick(awayTeam, 2)">+2</el-button>
        <el-button
        type="info"
        circle
        @click="handlePtsClick(awayTeam, 3)">+3</el-button>
    </el-col>
  </el-row>
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
    handleBusClick () {
      this.bus.$emit('change', this.pause)
    },
    handleStartClick () {
      if (typeof this.quarterInfo.quarterTime === 'string') {
        let formatQuarterTime = this.quarterInfo.quarterTime
        let min = formatQuarterTime.substr(0, 2)
        let sec = formatQuarterTime.substr(-2)
        this.quarterInfo.quarterTime = Number(min) * 60 + Number(sec)
      }
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

<style lang="stylus" scoped>
  .el-form-item
    height: 3rem
    margin-bottom: 5px
  .el-button
    margin-left: 0
    margin-bottom: 3rem
    display: block
    margin: 15px auto
    .iconPlay
      margin-left: -.5rem
      margin-right: 1.2rem
</style>
