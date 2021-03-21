<template>
  <h1>🌍 World Records 🌏</h1>
  <input type="text" v-model="filterInput" name="" id="" placeholder="Search...">
  <ul v-if="countryList.length" class="country-list">
    <li v-for="el in filteredList" v-bind:key="el" class="country">
        <RouterLink v-bind:to="getCountryCode(el.href)">{{el.name}}</RouterLink>
    </li>
  </ul>
  <h2 v-else>Loading...</h2>
  <router-view/>
</template>

<script>
import {getCountryList, extractAlphaCode} from '@/api'

export default {
  name: 'HomeView',
  data() {
    return {
      countryList: [],
      filterInput: ''
    }
  },
  async created() {
    this.countryList = await getCountryList()
  },
  methods: {
      getCountryCode(href) {
          return extractAlphaCode(href)
      }
  },
  computed: {
      filteredList() {
          return this.countryList
            .filter((country) => country.name.toLowerCase()
            .includes(this.filterInput.toLowerCase()))
      }
  }
}
</script>

<style scoped lang="scss">
    .country-list {list-style-type: none;}
    .country {margin: 10px; display: inline-block;}
</style>