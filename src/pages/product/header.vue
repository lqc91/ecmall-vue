<template>
  <me-navbar class="header">
    <template v-slot:left>
      <i class="iconfont icon-back" @click="goBack"></i>
    </template>
    <template v-slot:center>
      <p class="header-center">商品详情</p>
    </template>
    <template v-slot:right>
      <div class="icon-cart-wrap">
        <router-link to="/cart" tag="i" class="iconfont icon-cart"></router-link>
        <i class="cart-count" v-if="cartCount">{{cartCount}}</i>
      </div>
    </template>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar';

export default {
  name: 'ProductHeader',
  components: {
    MeNavbar
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  computed: {
    cartCount() {
      return this.$store.state.cartCount;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.header {
  background-color: $header-bgc-translucent;

  &-center {
    color: #fff;
    text-align: center;
    font-size: $font-size-l;
  }
}
.iconfont {
  color: $icon-color-default;
  font-size: $icon-font-size;
}
.icon-cart-wrap {
  position: relative;

  .cart-count {
    position: absolute;
    top: -4px;
    right: -4px;
    padding: 0 2px;
    min-width: 14px;
    height: 14px;
    line-height: 14px;
    text-align: center;
    border-radius: 7px;
    color: $header-bgc;
    background-color: #fff;
    font-size: 10px;
  }
}
</style>
