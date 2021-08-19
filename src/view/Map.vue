<template>
  <div id="map" class="map">

  </div>
</template>
<script>
import AMap from '@/map'
import mapConfig from '@m/map.config'
export default {
  data () {
    return {
      mapObj: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.mapObj = new AMap({
        target: 'map',
        view: mapConfig.viewOptions
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$background: #000;
.map{
  height: 100%;
  width: 100%;
  background: $background;
}
</style>