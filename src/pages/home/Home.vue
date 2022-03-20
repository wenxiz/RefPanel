<template>
  <div class="home">
    <ul class="select-tag">
      <li
        v-for="(item, index) in buttonNames"
        :key="index"
        @click="handleBtnClick(index)">
        <button class="select-tag-button" :class="btnIndex === index ? 'btnActive' : ''">{{ item }}</button>
      </li>
    </ul>
    <user-panel
      v-show="btnIndex === 0"
      :quarterInfo="quarterInfo" />
    <ref-panel
      v-show="btnIndex === 1"
      :quarterInfo="quarterInfo"
      :homeTeam="homeTeam"
      :awayTeam="awayTeam" />
    <show-score
      :quarterInfo="quarterInfo"
      :homeTeam="homeTeam"
      :awayTeam="awayTeam" />
  </div>
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
        quarterTime: 720
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
      }
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
  .select-tag {
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .select-tag-button {
    width: 7rem;
    height: 3rem;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  .btnActive {
    background-color: aqua;
  }
</style>
