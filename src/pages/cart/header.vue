<template>
  <me-navbar class="header">
    <template v-slot:left>
      <i class="iconfont icon-back" @click="goBack"></i>
    </template>
    <template v-slot:center>
      <p class="header-center">购物车</p>
    </template>
    <template v-slot:right>
      <i class="iconfont icon-msg"></i>
    </template>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar';

export default {
  name: 'CartHeader',
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
  color: #fff;
  border-bottom: 1px solid $border-color;
  background-color: $header-bgc-translucent;
}
.header-center {
  text-align: center;
  margin-left: 34px;
  font-size: $font-size-l;
}
.iconfont {
  font-size: $icon-font-size;
}
</style>
