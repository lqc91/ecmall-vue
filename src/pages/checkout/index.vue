<template>
  <div class="checkout">checkout</div>
</template>

<script>
export default {
  name: 'Checkout'
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.checkout {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $checkout-z-index + 1000;
  background-color: $bgc-theme;
}
</style>
