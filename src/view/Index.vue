<template>
  <div class="app">
    <Map></Map>
  </div>
</template>

<script>
  import Map from './Map.vue'
  // eslint-disable-next-line no-unused-vars
  import axios from 'axios'
  export default {
    components: {
      Map
    },
    mounted () {
      const url = 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson'
      axios.get(url).then((res) => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  .app{
    height: 100vh;
    width: 100%;
  }
</style>