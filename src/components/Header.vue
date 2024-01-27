<template>
  <header class="bg-white p-4">
    <div class="container mx-auto flex items-center justify-between">
        <a href="">
            <img v-bind:src="tbpsLogo" alt="The Big Phone Store Logo" class="" />
        </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      tbpsLogo: require('../assets/tbps-logo.webp'),
    };
  },
};
</script>

<style scoped>

</style>