<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import Index from './view/Index.vue'

Vue.use(ElementUI)
export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style lang="scss">
@import url('~ol/ol.css');
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
}
</style>
