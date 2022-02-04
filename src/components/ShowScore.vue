<template>
  <div>
    <div class="home">
      <h3 class="homeName"></h3>
      <img src="#" alt="homeLogo">
      <div class="homeScore"></div>
    </div>
    <div class="colon">:</div>
    <div class="away">
      <h3 class="awayName"></h3>
      <img src="#" alt="awayLogo">
      <div class="awayScore"></div>
    </div>
    <div class="quater">Quater</div>
    <div class="timer"> {{ quarterInfo.quarterTime }}</div>
  </div>
</template>

<script>
export default {
  name: 'ShowScore',
  props: {
    quarterInfo: Object
  }
}
</script>
