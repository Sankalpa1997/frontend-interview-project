<template>
  <div class="product-images-container relative">
    
    <!-- Product Image -->
    <div class="standard-image-container">
      <img
        id="myimage"
        :src="standardImagePath(product.images[mainImageIndex])"
        class="product-standard-image"
        :alt="product.title"
        ref="myImageRef"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
      />
    </div>

    <!-- Product Image Zoom -->
    <div ref="myResultRef" class="img-zoom-result" :style="{ backgroundImage: 'url(' + largeImagePath(product.images[mainImageIndex]) + ')' }">
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
      lens: null,
      cx: 0,
      cy: 0,
    };
  },
  computed: {
  },
  mounted() {
    this.createLens();
    this.imageZoom();
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
    handleMouseOver() {
      this.zoomedImageVisible = true;
      this.imageZoom();
    },

    handleMouseOut() {
      this.zoomedImageVisible = false;
    },
    changeMainImage(index) {
      this.mainImageIndex = index;
      this.imageZoom();
    },
    createLens() {
      // Create lens: 
      this.lens = document.createElement('div');
      this.lens.setAttribute('class', 'img-zoom-lens');
      // Insert lens:
      this.$refs.myImageRef.parentElement.insertBefore(this.lens, this.$refs.myImageRef);
    },
    imageZoom() {
      console.log('Image zooming');
      const img = this.$refs.myImageRef;
      const result = this.$refs.myResultRef;
      
      /* Calculate the ratio between result DIV and lens: */
      this.cx = result.offsetWidth / this.lens.offsetWidth;
      this.cy = result.offsetHeight / this.lens.offsetHeight;

    
      /* Set background properties for the result DIV */
      result.style.backgroundSize = (img.width * this.cx) + 'px ' + (img.height * this.cy) + 'px';

      /* Execute a function when someone moves the cursor over the image, or the lens: */
      this.lens.addEventListener('mousemove', this.moveLens);
      img.addEventListener('mousemove', this.moveLens);
      /* And also for touch screens: */
      this.lens.addEventListener('touchmove', this.moveLens);
      img.addEventListener('touchmove', this.moveLens);
    },
    moveLens(e) {
      const pos = this.getCursorPos(e);
      const x = pos.x - (this.lens.offsetWidth / 2);
      const y = pos.y - (this.lens.offsetHeight / 2);
      
      /* Prevent the lens from being positioned outside the image: */
      if (x > this.$refs.myImageRef.width - this.lens.offsetWidth) {
        this.x = this.$refs.myImageRef.width - this.lens.offsetWidth;
      }
      if (x < 0) {
        this.x = 0;
      }
      if (y > this.$refs.myImageRef.height - this.lens.offsetHeight) {
        this.y = this.$refs.myImageRef.height - this.lens.offsetHeight;
      }
      if (y < 0) {
        this.y = 0;
      }

      const maxX = this.$refs.myImageRef.width - this.lens.offsetWidth;
      const maxY = this.$refs.myImageRef.height - this.lens.offsetHeight;

      /* Set the position of the lens: */
      this.lens.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
      this.lens.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
      console.log('Move Lens' +'x:'+ x +',y:'+ y);

      /* Display what the lens "sees": */
      this.$refs.myResultRef.style.backgroundPosition = '-' + (x * this.cx) + 'px -' + (y * this.cy) + 'px';

    },
    getCursorPos(e) {
      console.log('Get Cursor');
      const a = this.$refs.myImageRef.getBoundingClientRect();
      const x = e.pageX  - a.left - window.scrollX;
      const y = e.pageY - a.top - window.scrollY;
      
      return { x, y };
    },
  },
};
</script>

<style>
.product-images-container {
  @apply w-1/2 flex flex-col items-center justify-center bg-white p-12 gap-12;
}


.standard-image-container {
 @apply relative;
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


.standard-image-container:hover + .img-zoom-result {
  @apply block;
}


.img-zoom-lens {
  @apply absolute border-solid border border-gray-300 w-24 h-24 bg-white opacity-70;
}

.img-zoom-result {
  @apply hidden absolute border-solid border border-gray-300 w-full h-full left-full top-0 z-50 bg-white;
  background-repeat: no-repeat;
}

</style>