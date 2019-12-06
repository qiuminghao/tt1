<template>
  <div id="app">
    <router-view>
      <home></home>
    </router-view>
  </div>
</template>
<script>
import Login from './login/Login'
import Home from './components/Home'
export default {
  components: {
    'login': Login,
    'home': Home
  }
}
</script>
<style>
</style>
