<template>
  <div class="userPanel">
    sth later...
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
</style>
