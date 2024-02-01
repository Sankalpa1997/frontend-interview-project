<template>
  <div id="app">
    <PageHeader/>
    <SingleProductPage/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import SingleProductPage from './views/SingleProductPage.vue';

export default {
  components: { PageHeader, SingleProductPage },
  name: 'app'
}
</script>

<style src="./styles.css"></style>
