<template>
  <me-navbar class="header">
    <template v-slot:left>
      <i class="iconfont icon-back" @click="goBack"></i>
    </template>
    <template v-slot:center>
      <p class="header-center">商品详情</p>
    </template>
    <template v-slot:right>
      <router-link to="/cart" tag="i" class="iconfont icon-cart"></router-link>
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
</style>
