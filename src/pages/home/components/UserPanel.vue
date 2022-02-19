<template>
  <div class="userPanel">
    <div class="timeLeft">
      <label for="timeLeft">Time Left:</label>
      <input
        type="text"
        v-model="quarterInfo.quarterTime" />
    </div>
    <div class="select">
        <span>Quarter</span>
        <select v-model="quarterInfo.selected">
          <option disabled value="">Select</option>
          <option
            v-for="item in quarterInfo.quarter"
            :key="item.index">{{ item }}</option>
        </select>
      </div>
  </div>
</template>

<script>

export default {
  name: 'UserPanel',
  props: {
    quarterInfo: Object
  }
}

</script>

<style>
  .userPanel {
    width: 100%;
    height: 5rem;
    border: 5px solid yellow;
    border-radius: 1rem;
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .timeLeft, .select {
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
