<template>
  <div id="app">
    <index style="height:100%;width:100%" />
  </div>
</template>

<script>
import index from './views/index.vue'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
