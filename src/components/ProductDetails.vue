<template>
  <div>
    <p>{{ product.brand }}</p>
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    <p>Price: {{ formattedPrice }}</p>
    <p>SIM: {{ product.sim }}</p>
    <p>Condition: {{ product.condition }}</p>
    <p>Colour: {{ product.colour }}</p>
    <p>Network: {{ product.network }}</p>
    <p>Storage: {{ product.storage }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    formattedPrice() {
      return `£${this.product.price.toFixed(2)}`;
    },
  },
};
</script>

<style scoped></style>
