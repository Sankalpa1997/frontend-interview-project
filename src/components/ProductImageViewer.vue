<template>
  <div class="product-images-container relative">
    <div class="">
      <!-- Standard Image -->
      <img
        :src="standardImagePath(product.images[this.mainImageIndex])"
        :alt="product.title"
        class="product-standard-image"
        @mouseover="showZoomedImage"
        @mouseout="hideZoomedImage"
      />

      <!-- Zoomed Image -->
      <div v-show="zoomedImageVisible" class="zoomed-image-container">
        <img :src="largeImagePath(product.images[this.mainImageIndex])" :alt="product.title" class="zoomed-image" />
      </div>
    </div>

    <!-- Thumbnails -->
    <div class="thumbnail-container">
      <img
        v-for="(image, index) in product.images"
        :key="index"
        :src="thumbnailImagePath(image)"
        :alt="product.title"
        @mouseover="changeMainImage(index)"
        class="thumbnail"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mainImageIndex: 0,
      zoomedImageVisible: false,
    };
  },
  computed: {
  },
  methods: {
    standardImagePath(image) {
      return require(`../assets/images/standard/${image.standard}`);
    },
    thumbnailImagePath(image) {
      return require(`../assets/images/thumbnails/${image.thumbnail}`);
    },
    largeImagePath(image) {
      return require(`../assets/images/large/${image.zoomed}`);
    },
    changeMainImage(index) {
      this.mainImageIndex = index;
      this.hideZoomedImage();
    },
    showZoomedImage() {
      this.zoomedImageVisible = true;
    },
    hideZoomedImage() {
      this.zoomedImageVisible = false;
    },
  },
};
</script>

<style scoped>
.product-images-container {
  @apply w-1/2 flex flex-col items-center justify-center bg-white p-12 gap-12;
}

.product-standard-image {
  @apply h-96 w-96 object-contain;
}

.thumbnail-container {
  @apply flex flex-row gap-2;
}

.thumbnail {
  @apply w-16 h-16 object-contain p-2 cursor-pointer;
}

.thumbnail:hover {
  @apply opacity-75 border-solid rounded-md border-xblue border-2;
}

.zoomed-image-container {
  position: absolute;
  top: 0;
  left: 102%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.zoomed-image {
  height: 100%;
}
</style>
