<template>
  <div class="home">
    <label for="homeTeam">Home Team:</label>
    <input type="text" id="homeTeam" v-model="homeTeamName" />
    <label for="awayTeam">Away Team:</label>
    <input type="text" id="awayTeam" v-model="awayTeamName" />
    <router-link to="/home">
      <input
        type="button"
        value="Start Game!"
        @click="handleLoginBtn" />
    </router-link>
    <div class="swiper">
      <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index">
          <div
            class="icon"
            v-for="item of page"
            :key="item.id"
            >
              <div class="icon-img" @click="handleIconClick">
                  <img class="icon-img-content" :src="item.imgUrl" />
              </div>
          </div>
      </swiper-slide>
    </swiper>
    </div>
    <div class="showHomeLogo">
      <img class="icon-img-content" :src="homeTeamLogo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      homeTeamName: '',
      awayTeamName: '',
      homeTeamLogo: '',
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
    handleLoginBtn () {
      //
      console.log(this.homeTeamName, this.awayTeamName)
    },
    handleIconClick () {
      document.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        const target = e.target
        if (target.nodeName === 'IMG') {
          this.homeTeamLogo = target.src
        }
      })
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
</style>
