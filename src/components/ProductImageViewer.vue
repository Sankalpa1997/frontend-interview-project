<template>
    <div class="w-2/4">
        <img
        :src="standardImagePath"
        :alt="product.title"
        class="main-image object-scale-down h-48 w-96"
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
      return this.standardPath || this.thumbnailPath; 
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
.product-image-viewer {
  width: 50%;
}

.main-image {
  height: 100%;
}

</style>