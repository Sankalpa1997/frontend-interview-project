<template>
  <div id="app">
    <Header/>
    <SingleProductPage/>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import SingleProductPage from './views/SingleProductPage.vue';

export default {
  components: { Header, SingleProductPage },
  name: 'app'
}
</script>

<style src="./styles.css"></style>
