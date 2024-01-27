<template>
  <div id="app">
    <Header/>
    <p>{{msg}}</p>
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  components: { Header },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style src="./styles.css"></style>
