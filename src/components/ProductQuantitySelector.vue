<template>
  <div class="product-quantity-selector">
    <div class="product-quantity-field">
      <button @click="decrementQuantity" class="quantity-button">-</button>
      <input type="number" v-model="quantity" class="quantity-input" />
      <button @click="incrementQuantity" class="quantity-button">+</button>
    </div>
    <button @click="addToBasket" class="add-to-basket-button">Add to Basket</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToBasket() {
      console.log(`Added ${this.quantity} items to the basket.`);
    }
  },
};
</script>

<style scoped>
.product-quantity-selector {
  @apply flex flex-col gap-4;
}
.product-quantity-field {
  @apply flex items-center;
}

.product-quantity-field input {
  @apply bg-gray-200 text-xblue;
}

.quantity-button {
  @apply text-gray-600 text-xl border-none p-2 cursor-pointer;
}

.quantity-input {
  @apply w-16 h-10 text-center m-1 appearance-none; 
}

.quantity-input::-webkit-inner-spin-button,
.quantity-input::-webkit-outer-spin-button {
  @apply appearance-none m-0;
}

.add-to-basket-button {
  @apply w-full bg-xyellow text-black px-4 py-2 rounded-md font-medium cursor-pointer;
}
</style>

