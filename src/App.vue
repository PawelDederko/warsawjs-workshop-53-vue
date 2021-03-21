<template>
  <Navigation/>
  <RouterView/>
</template>

<script>
import Navigation from '@/components/navigation.vue'

export default {
  name: 'World Records',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
