<template>
  <me-navbar class="header">
    <template v-slot:center>搜索框</template>
    <template v-slot:right>
      <i class="iconfont icon-msg"></i>
    </template>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar';
export default {
  name: 'CategoryHeader',
  components: {
    MeNavbar
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.header {
  &.mine-navbar {
    background-color: $header-bgc-translucent;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>
