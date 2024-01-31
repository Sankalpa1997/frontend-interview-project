<template>
  <div class="xl:container xl:mx-auto flex flex-row justify-between p-5 bg-gray-100">
    <ProductImageViewer
      :product="productData"
      :thumbnail-path="thumbnailImagePath(productData.images[7])"
      :large-path="largeImagePath(productData.images[1])"
      :standard-path="standardImagePath(productData.images[0])"
    />
    <ProductDetails :product="productData" />
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
        images: ['product-image.webp', 'product-image-large.webp', 'product-image-front.webp','product-image-front-large.webp','product-image-back.webp','product-image-back-large.webp','product-image.webp','product-image-thumbnail.webp','product-image-front-thumbnail.webp','product-image-back-thumbnail.webp'],
      },
    };
  },
  methods: {
    thumbnailImagePath(image) {
      return require(`../assets/images/thumbnails/${image}`);
    },
    largeImagePath(image) {
      return require(`../assets/images/large/${image}`);
    },
    standardImagePath(image) {
      return require(`../assets/images/standard/${image}`);
    },
  },
};
</script>

<style scoped>
</style>
