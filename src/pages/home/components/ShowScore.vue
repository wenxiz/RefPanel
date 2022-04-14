<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="8">
        <el-image
          :src="this.homeTeam.logoUrl"
        ></el-image>
        <h3 class="teamName">{{ this.homeTeam.name }}</h3>
      </el-col>
      <el-col :xs="8">
        <div>
          <div>Game#:</div>
          <div>1Q3KJS</div>
        </div>
      </el-col>
      <el-col :xs="8">
        <el-image
          :src="this.awayTeam.logoUrl"
        ></el-image>
        <h3 class="teamName">{{ this.awayTeam.name }}</h3>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="8">
        <div class="teamScore">{{ this.homeTeam.score }}</div>
      </el-col>
      <el-col :xs="8">
        <div class="colon">:</div>
      </el-col>
      <el-col :xs="8">
        <div class="teamScore">{{ this.awayTeam.score }}</div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="14">
        <div class="quaterNum">Quarter {{ quarterInfo.selected }}</div>
      </el-col>
      <el-col :xs="10">
        <div class="timer"> {{ quarterInfo.quarterTime | quarterTimeFilter }} </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { myMixin } from '@/pages/mixins.js'
import { mapState } from 'vuex'

export default {
  name: 'ShowScore',
  mixins: [myMixin],
  props: {
    quarterInfo: Object
  },
  filters: {
    quarterTimeFilter (time) {
      if (time >= 60) {
        let min = Math.floor(time / 60)
        let sec = ('0' + Math.floor(time % 60)).slice(-2)

        return `${min} : ${sec}`
      } else {
        return time
      }
    }
  },
  computed: {
    ...mapState(['homeTeam', 'awayTeam'])
  }
}
</script>

<style lang="stylus" scoped>
  .el-row
    margin-bottom: 20px
    .el-image
      height: 5rem
    .teamName
      height: 3rem
      font-weight: bold
    .teamScore
      font-size: 3rem
      font-weight: bold
    .colon
      font-size: 3rem;
    .quaterNum
      font-size: 1.5rem;
    .quarter
      margin-top: 1rem;
      display: flex;
    .timer
      width: 4.5rem
      height: 1rem
      border: 1px solid black
      padding: 0.2rem
      border-radius: 5px
</style>
