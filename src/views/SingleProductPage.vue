<template>
  <div class="container mx-auto">
    <ProductDetails :product="productData" />
    <ProductImageViewer :product="productData" />
  </div>
</template>

<script>

import ProductDetails from "../components/ProductDetails.vue";
import ProductImageViewer from "../components/ProductImageViewer.vue";

export default {
  components: {
    ProductDetails,
    ProductImageViewer,
  },
  data() {
    return {
      productData: {
        brand: "Samsung",
        model: "Galaxy S23",
        title: "Samsung Galaxy S23 Plus 5G",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 880,
        sim: 'Dual SIM',
        condition: 'Like New',
        colour: 'Lavender', 
        network: 'Unlocked', 
        storage: '512GB',
        images: ["image1.jpg", "image2.jpg"],
      },
    };
  },
};
</script>

<style></style>
