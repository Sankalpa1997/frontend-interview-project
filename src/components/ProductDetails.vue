<template>
  <div class="w-2/4">
    <p>{{ product.brand }}</p>
    <h1>{{ product.title }}</h1>
    <p>
      Price: <span class="uppercase">{{ formattedPrice }}</span>
    </p>
    <p>
      SIM: <span class="uppercase">{{ product.sim }}</span>
    </p>
    <p>
      Condition: <span class="uppercase">{{ product.condition }}</span>
    </p>
    <p>
      Colour: <span class="uppercase">{{ product.colour }}</span>
    </p>
    <p>
      Network: <span class="uppercase">{{ product.network }}</span>
    </p>
    <p>
      Storage: <span class="uppercase">{{ product.storage }}</span>
    </p>
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
