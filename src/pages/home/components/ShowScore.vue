<template>
  <div class="showScore">
    <div class="matchUp">
      <div class="team">
        <img :src="homeTeam.logoUrl" alt="homeLogo" class="teamLogo">
        <div class="teamWrapper">
          <h3 class="teamName">{{ homeTeam.name }}</h3>
          <div class="teamScore">{{ homeTeam.score }}</div>
        </div>
      </div>
      <div class="colon">:</div>
      <div class="team away">
        <img class="teamLogo" :src="awayTeam.logoUrl" alt="awayLogo">
        <div class="teamWrapper">
          <h3 class="teamName">{{ awayTeam.name }}</h3>
          <div class="teamScore">{{ awayTeam.score }}</div>
        </div>
      </div>
    </div>
    <div class="quarter">
      <div class="quaterNum">Quarter {{ quarterInfo.selected }}</div>
      <div class="timer"> {{ quarterInfo.quarterTime | quarterTimeFilter }}</div>
    </div>
  </div>
</template>

<script>
import { myMixin } from '@/pages/mixins.js'

export default {
  name: 'ShowScore',
  mixins: [myMixin],
  props: {
    quarterInfo: Object,
    homeTeam: Object,
    awayTeam: Object
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
  }
}
</script>

<style scoped>
  .showScore {
    width: 100%;
    height: 20rem;
    border: 5px solid blue;
    box-sizing: border-box;
    border-radius: 1rem;
  }
  .matchUp {
    height: 15rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .team {
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .away {
    flex-direction: row-reverse;
  }
  .teamLogo {
    width: 30%;
    height: 50%;
    background-size: cover;
  }
  .teamWrapper {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1rem;
  }
  .teamName {
    height: 50%;
    font-size: 2rem;
  }
  .teamScore {
    font-weight: bold;
    font-size: 3.5rem;
  }
  .colon {
    font-size: 4rem;
    align-self: flex-end;
  }
  .quarter {
    margin-top: 1rem;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    position: relative;
    font-weight: bold;
  }
  .timer {
    position: absolute;
    right: 10rem;
  }
</style>
