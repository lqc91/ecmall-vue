<template>
  <transition name="product">
    <div class="product">
      <header class="g-header-container">
        <product-header />
      </header>
      <product-slider :sliders="sliders" />
    </div>
  </transition>
</template>

<script>
import ProductHeader from './header';
import ProductSlider from './slider';
import { getProductDetail } from 'api/product';
export default {
  name: 'Product',
  components: {
    ProductHeader,
    ProductSlider
  },
  data() {
    return {
      sliders: []
    };
  },
  created() {
    this.getSliders();
  },
  methods: {
    getSliders() {
      // 获取 slider 图片
      return getProductDetail(this.$route.params.id).then(data => {
        this.sliders = data.item.images;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.product {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: $product-z-index;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
.product-leave-active {
  transition: transform 0.5s;
}
.product-leave-to {
  transform: translateX(100%);
}
.product {
  animation: product-enter 0.5s;
}

@keyframes product-enter {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
