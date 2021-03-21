<template>
  <nav>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
  </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped lang="scss">
    nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
</style>