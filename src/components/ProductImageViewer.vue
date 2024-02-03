<template>
  <div class="product-images-container relative">
    <div class="standard-image-container" 
      @mouseover="showNet"
      @mouseout="hideNet"
      @mousemove="updateNetPosition"
    >
      <!-- Standard Image -->
      <img
        :src="standardImagePath(product.images[this.mainImageIndex])"
        :alt="product.title"
        class="product-standard-image"
        ref="standardImage"
      />

       <!-- Net Overlay -->
       <div v-if="netVisible" class="net-overlay" :style="netOverlayStyle"></div>

    </div>

    <!-- Zoomed Image -->
    <div v-show="zoomedImageVisible" class="zoomed-image-container">
      <img :src="largeImagePath(product.images[this.mainImageIndex])" :alt="product.title" class="zoomed-image" />
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
      netVisible: false,
      netWidth: 150,
      netHeight: 100,
      mousePosition: { x: 0, y: 0 },
    };
  },
  computed: {
    netOverlayStyle() {
      const mouseX = this.mousePosition.x - this.netWidth;
      const mouseY = this.mousePosition.y - this.netHeight;

      return {
        width: `${this.netWidth}px`,
        height: `${this.netHeight}px`,
        left: `${mouseX}px`,
        top: `${mouseY}px`,
      };
    },
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
    showNet() {
      this.netVisible = true;
    },
    hideNet() {
      this.netVisible = false;
    },
    updateNetPosition(event) {
      this.mousePosition = { x: event.clientX - this.netWidth, y: event.clientY - this.netHeight };

      if (this.netVisible) {
        this.hideNet();
        this.showNet();
      }
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
  width: 300px;
  height: 200px;
  overflow: hidden;
  display: none;
}

.zoomed-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.standard-image-container {
  position: relative;
}


.net-overlay {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid red;
  pointer-events: none;
  cursor: crosshair;
}
</style>
