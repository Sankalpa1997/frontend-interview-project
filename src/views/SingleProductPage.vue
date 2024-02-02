<template>
  <div class="product-container">
    <ProductImageViewer
      :product="productData"
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
        sim: "Dual SIM",
        condition: "Like New",
        colour: "Lavender",
        network: "Unlocked",
        storage: "512GB",
        images: [
          {
            standard: "product-image.webp",
            thumbnail: "product-image-thumbnail.webp",
            zoomed: "product-image-large.webp",
          },
          {
            standard: "product-image-front.webp",
            thumbnail: "product-image-front-thumbnail.webp",
            zoomed: "product-image-front-large.webp",
          },
          {
            standard: "product-image-back.webp",
            thumbnail: "product-image-back-thumbnail.webp",
            zoomed: "product-image-back-large.webp",
          },
        ],
      },
      thumbnailPath: "../assets/images/thumbnails/",
    };
  },
  methods: {
    standardImagePath(image) {
      return require(`../assets/images/standard/${image}`);
    },
  },
};
</script>

<style scoped>
.product-container {
  @apply xl:container xl:mx-auto flex flex-row justify-between px-5 py-8 bg-gray-100 gap-24;
}
</style>
