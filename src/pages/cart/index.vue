<template>
  <transition name="cart">
    <div class="cart">
      <header class="g-header-container">
        <cart-header />
      </header>
    </div>
  </transition>
</template>

<script>
import CartHeader from './header';

export default {
  name: 'Cart',
  components: {
    CartHeader
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.cart-enter-active,
.cart-leave-active {
  transition: transform 0.5s;
}
.cart-enter,
.cart-leave-to {
  transform: translateX(100%);
}
.cart-enter-to,
.cart-leave {
  transform: translateX(0);
}
.cart {
  width: 100%;
  height: 100%;
}
</style>
