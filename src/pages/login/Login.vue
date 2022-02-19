<template>
  <div class="home">
    <label for="usrName">User Name:</label>
    <input type="text" id="usrName" v-model="userName" />
    <label for="pswd">Password:</label>
    <input type="password" id="pswd" v-model="password" />
    <router-link to="#">
      <input type="button" value="Sign Up" />
    </router-link>
    <router-link to="/home"><input
      type="button"
      value="Login"
      @click="handleLoginBtn" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    handleLoginBtn () {
      //
    }
  }
}
</script>

<style>

</style>
