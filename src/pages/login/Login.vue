<template>
  <div class="home">
    <label for="homeTeam">Home Team:</label>
    <input type="text" id="homeTeam" class="team-info" v-model="homeTeam.name" />
    <label for="awayTeam">Away Team:</label>
    <input type="text" id="awayTeam" class="team-info" v-model="awayTeam.name" />
    <div class="team-info">Select Team Logos:</div>
    <div
        class="swiper"
        :class="isDisabled?'click-disable':''"
        @click="handleIconClick">
      <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index">
          <div
            class="icon"
            v-for="item of page"
            :key="item.id"
            >
              <div class="icon-img">
                  <img class="icon-img-content" :src="item.imgUrl" />
              </div>
          </div>
      </swiper-slide>
    </swiper>
    </div>
    <div class="show-teams">
      <div class="show-team">
        <div class="show-team-name">{{homeTeam.name}}</div>
        <div class="show-tome-logo">
          <img class="show-tome-logo-img" :src="homeTeam.logoUrl" />
        </div>
      </div>
      <h1>VS</h1>
      <div class="show-team">
        <h1 class="show-team-name">{{awayTeam.name}}</h1>
        <div class="show-tome-logo">
          <img class="show-tome-logo-img" :src="awayTeam.logoUrl" />
        </div>
      </div>
    </div>
    <input
        type="button"
        value="Start Game!"
        @click="handleLoginBtn(homeTeam, awayTeam)" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      homeTeam: {
        name: '',
        logoUrl: ''
      },
      awayTeam: {
        name: '',
        logoUrl: ''
      },
      selected: false,
      isDisabled: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      logoList: [{
        id: 1,
        imgUrl: 'static/image/1_jazz.png'
      }, {
        id: 2,
        imgUrl: 'static/image/2_pistons.png'
      }, {
        id: 3,
        imgUrl: 'static/image/3_raptors.png'
      }, {
        id: 4,
        imgUrl: 'static/image/4_rockets.png'
      }, {
        id: 5,
        imgUrl: 'static/image/5_hawks.png'
      }, {
        id: 6,
        imgUrl: 'static/image/6_suns.png'
      }, {
        id: 7,
        imgUrl: 'static/image/7_grizzlies.png'
      }, {
        id: 8,
        imgUrl: 'static/image/8_bucks.png'
      }, {
        id: 9,
        imgUrl: 'static/image/9_thunders.png'
      }, {
        id: 10,
        imgUrl: 'static/image/10_kings.png'
      }, {
        id: 11,
        imgUrl: 'static/image/11_magic.png'
      }, {
        id: 12,
        imgUrl: 'static/image/12_cavaliers.png'
      }, {
        id: 13,
        imgUrl: 'static/image/13_trailblazers.png'
      }, {
        id: 14,
        imgUrl: 'static/image/14_celtics.png'
      }, {
        id: 15,
        imgUrl: 'static/image/15_spurs.png'
      }, {
        id: 16,
        imgUrl: 'static/image/16_bulls.png'
      }, {
        id: 17,
        imgUrl: 'static/image/17_ pelicans.png'
      }, {
        id: 18,
        imgUrl: 'static/image/18_clippers.png'
      }, {
        id: 19,
        imgUrl: 'static/image/19_wizards.png'
      }, {
        id: 20,
        imgUrl: 'static/image/20_lakers.png'
      }, {
        id: 21,
        imgUrl: 'static/image/21_heat.png'
      }, {
        id: 22,
        imgUrl: 'static/image/22_timerwolves.png'
      }, {
        id: 23,
        imgUrl: 'static/image/23_nuggets.png'
      }, {
        id: 24,
        imgUrl: 'static/image/24_hornets.png'
      }, {
        id: 25,
        imgUrl: 'static/image/25_warriors.png'
      }, {
        id: 26,
        imgUrl: 'static/image/26_mavericks.png'
      }, {
        id: 27,
        imgUrl: 'static/image/27_nets.png'
      }, {
        id: 28,
        imgUrl: 'static/image/28_76ers.png'
      }, {
        id: 29,
        imgUrl: 'static/image/29_pacers.png'
      }]
    }
  },
  methods: {
    handleLoginBtn (homeTeam, awayTeam) {
      // this.$store.dispatch('changeHomeTeam', hometeam)
      // this.$store.dispatch('changeAwayTeam', awayTeam)

      // check input
      if (this.homeTeam.name && this.awayTeam.name) {
        // there's no async actions, so use 'commit' instead
        // this.$store.commit('changeHomeTeam', homeTeam)
        // this.$store.commit('changeAwayTeam', awayTeam)
        this.changeHomeTeam(homeTeam)
        this.changeAwayTeam(awayTeam)

        this.$router.push('/home')
      } else {
        alert('Please enter Teams or select logos!')
      }
    },
    // optimize 'this.$store.commit' with mapMutations
    ...mapMutations(['changeHomeTeam', 'changeAwayTeam']),
    handleIconClick (e) {
      e.stopPropagation()
      e.preventDefault()
      const target = e.target
      if (target.nodeName === 'IMG') {
        if (!this.selected) {
          if (confirm('Do you want this one for HomeTeam?')) {
            this.homeTeam.logoUrl = target.src
            this.selected = true
          }
        } else {
          if (confirm('Do you want this one for AwayTeam?')) {
            this.awayTeam.logoUrl = target.src
            this.isDisabled = true
          }
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.logoList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    display: flex
    flex-direction: column
    align-items: center
    .team-info
      width: 50%
      margin: 1rem
    .show-teams
      width: 20rem
      margin: 1rem
      display: flex
      justify-content: space-around
      align-items: center
      .show-team
        width: 6rem
        height: 6rem
        .show-team-name
          width: 100%
          height: 1.5rem
          font-weight: bold
          font-size: 1.5rem
          margin-bottom: 0.5rem
        .show-tome-logo
          width: 100%
          height: 80%
          .show-tome-logo-img
            height: 100%
            display: block
  .swiper
    width: 50%;
    border: 1px solid black;
    margin: 0 auto;
    .icon
      overflow: hidden
      float: left
      position relative
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        right: 0
        left: 0
        top: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
  .click-disable
        pointer-events: none;
</style>
