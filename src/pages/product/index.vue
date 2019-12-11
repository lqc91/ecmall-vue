<template>
  <transition name="product">
    <div class="product">
      <header class="g-header-container">
        <product-header />
      </header>
    </div>
  </transition>
</template>

<script>
import ProductHeader from './header';
export default {
  name: 'Product',
  components: {
    ProductHeader
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
