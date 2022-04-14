<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="24" :lg="24">
      <el-tabs v-model="activeName">
        <show-score
        :quarterInfo="quarterInfo"
        :homeTeam="homeTeam"
        :awayTeam="awayTeam" />
        <el-tab-pane label="User" name="User" >
          <user-panel
            :quarterInfo="quarterInfo" />
        </el-tab-pane>
        <el-tab-pane label="Ref" name="Ref" >
          <ref-panel
            :quarterInfo="quarterInfo"
            :homeTeam="homeTeam"
            :awayTeam="awayTeam" />
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import { myMixin } from '@/pages/mixins'

import ShowScore from './components/ShowScore'
import RefPanel from './components/RefPanel'
import UserPanel from './components/UserPanel'

export default {
  name: 'Home',
  mixins: [myMixin],
  components: {
    ShowScore,
    RefPanel,
    UserPanel
  },
  data () {
    return {
      buttonNames: ['User', 'Ref'],
      btnIndex: 0,
      quarterInfo: {
        quarter: [1, 2, 3, 4],
        selected: 1,
        quarterTime: 6
      },
      homeTeam: {
        name: 'Miami Heat',
        score: 0,
        logoUrl: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/baike/g=0;w=268/sign=3cc44a4e3af33a878e6d0511b161220e/34fae6cd7b899e51e64ef36a42a7d933c9950d88.jpg'
      },
      awayTeam: {
        name: 'Los Angeles Lakers',
        score: 0,
        logoUrl: 'https://img0.baidu.com/it/u=1966218152,3607118776&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=300'
      },
      activeName: 'Ref'
    }
  },
  methods: {
    handleBtnClick (index) {
      this.btnIndex = index
    }
  }
}
</script>

<style>
</style>
