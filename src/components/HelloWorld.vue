<template>
  <div>
    <el-button type="info" @click="logout"> 推出</el-button>
    <h1>
      hello
    </h1>
  </div>
</template>
<script>
export default {
  methods: {
    logout () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

