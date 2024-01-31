<template>
  <div class="w-2/4">
    <p class="uppercase text-gray-400">{{ product.brand }}</p>
    <h1 class="text-2xl font-medium">{{ product.title }}</h1>
    <p>
      <span class="text-2xl font-medium">{{ formattedPrice }}</span>
    </p>

    <hr class="my-4 border-t-2 border-gray-300">
    
    <div class="flex flex-col gap-4">
      <p>
        <span class="font-medium">SIM:</span> <span class="uppercase">{{ product.sim }}</span>
      </p>
      <p>
        <span class="font-medium">Condition:</span> <span class="uppercase">{{ product.condition }}</span>
      </p>
      <p>
        <span class="font-medium">Colour:</span> <span class="uppercase">{{ product.colour }}</span>
      </p>
      <p>
        <span class="font-medium">Network:</span> <span class="uppercase">{{ product.network }}</span>
      </p>
      <p>
        <span class="font-medium">Storage:</span> <span class="uppercase">{{ product.storage }}</span>
      </p>
    </div>

    <hr class="my-4 border-t-2 border-gray-300">

    <ProductQuantitySelector/>

  </div>
</template>

<script>
import ProductQuantitySelector from './ProductQuantitySelector.vue';

export default {
    props: ["product"],
    computed: {
        formattedPrice() {
            return `£${this.product.price.toFixed(2)}`;
        },
    },
    components: { ProductQuantitySelector }
};
</script>

<style scoped></style>
