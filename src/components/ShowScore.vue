<template>
  <div>
    <div class="home">
      <h3 class="homeName">{{ homeTeam.name }}</h3>
      <img src="#" alt="homeLogo">
      <div class="homeScore">{{ homeTeam.score }}</div>
    </div>
    <div class="colon">:</div>
    <div class="away">
      <h3 class="awayName">{{ awayTeam.name }}</h3>
      <img src="#" alt="awayLogo">
      <div class="awayScore">{{ awayTeam.score }}</div>
    </div>
    <div class="quater">Quarter {{ quarterInfo.selected }}</div>
    <div class="timer"> {{ quarterInfo.quarterTime }}</div>
  </div>
</template>

<script>
export default {
  name: 'ShowScore',
  props: {
    quarterInfo: Object,
    homeTeam: Object,
    awayTeam: Object
  }
}
</script>
