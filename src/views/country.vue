<template>
  <h1>{{details.name}}</h1>
  <div class="country-details">
    <h2>Facts about the country</h2>
    <ul class="country-facts">
        <li><strong>🌍 Continent: </strong>{{details.continent}}</li>
        <li><strong>💰 Currency: </strong>{{details.currency}}</li>
        <li><strong>👨‍👩‍👧‍👦 Population: </strong>{{Number(details.population).toLocaleString()}}</li>
    </ul>
    <h2>Cities</h2>
    <ul>
        <li v-for="city in details.cities" v-bind:key="city">
            <h3>{{city.name}}</h3>
            <p>👫 City population: {{city.population.toLocaleString()}}</p>
            <ul v-for="score in city.scores" v-bind:key="score">
                <li>{{score.name}}: 
                    {{Number(score.score_out_of_10)
                    .toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}} / 10</li>
            </ul>
        </li>
    </ul>
    <h2>Median salaries</h2>
    <p>in USD per year</p>
    <ul>
        <li v-for="salary in details.salaries" v-bind:key="salary">
            {{salary.job.title}}: 
            {{Number(salary.salary_percentiles.percentile_50)
            .toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}}
        </li>
    </ul>
  </div>
  
</template>

<script>
import {getCountryDetails} from '@/api'

export default {
    name: 'CountryView',
    data() {
        return {
            details: {}
        }
    },
    async created() {
        this.details = await getCountryDetails(this.$route.params.country_code)
    }
}
</script>

<style scoped lang="scss">
    .country-details {text-align: left;}
    .country-facts {list-style-type: none;}
</style>