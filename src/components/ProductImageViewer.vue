<template>
    <div class="product-image-viewer">
        <img
        :src="standardImagePath"
        :alt="product.title"
        class="main-image"
        @mouseover="showZoomedImage"
        @mouseout="hideZoomedImage"
        />        
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    thumbnailPath: {
      type: String,
      required: true,
    },
    largePath: {
      type: String,
      required: true,
    },
    standardPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      zoomedImageVisible: false,
    };
  },
  computed: {
    standardImagePath() {
      return this.standardPath || this.thumbnailPath; // Use thumbnail as fallback
    },
  },
  methods: {
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
/* Add styles for ProductImageViewer.vue if needed */
.product-image-viewer {
  position: relative;
}

.main-image {
  width: 100%; /* Adjust as needed */
}

/* Additional styles for zoomed image can be added here */
</style>