<template>
  <div class="product-images-container">
    <!-- Main Product Image -->
    <img
      :src="standardImagePath"
      :alt="product.title"
      class="product-standard-image"
    />

    <!-- Thumbnails -->
    <div class="thumbnail-container">
      <img
        v-for="(thumbnail, index) in product.thumbnails"
        :key="index"
        :src="thumbnailImagePath(thumbnail)"
        :alt="product.title"
        @mouseover="changeMainImage(thumbnail)"
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
    standardPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      mainImage: this.standardPath || this.thumbnailPath,
    };
  },
  computed: {
    standardImagePath() {
      return this.mainImage;
    }
  },
  methods: {
    thumbnailImagePath(image) {
      const path = require(`../assets/images/thumbnails/${image}`);
      console.log('Thumbnail path:', path);
      return path;
    },
    changeMainImage(image) {
      // this.mainImage = `${this.thumbnailPath}/${image}`;
      this.mainImage = require(`../assets/images/standard/${image.replace('-thumbnail', '')}`);
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
  @apply w-16 h-16 object-contain p-2 cursor-pointer ;
}

.thumbnail:hover {
  @apply opacity-75 border-solid rounded-md border-xblue border-2;
}
</style>

