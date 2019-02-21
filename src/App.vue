<template>
  <div id="app">
    <converter></converter>
  </div>
</template>

<script>
import Converter from './components/converter'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    Converter
  }
}
</script>

<style>

</style>
