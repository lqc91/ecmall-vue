<template>
  <me-navbar class="presonal-header header">
    <template v-slot:center>
      <p class="header-center">我的慕淘</p>
    </template>
    <template v-slot:right>
      <i class="iconfont icon-setting"></i>
      <i class="iconfont icon-msg"></i>
    </template>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar';
export default {
  name: 'PersonalHeader',
  components: {
    MeNavbar
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.header {
  color: #fff;
  background-color: $header-bgc;

  &-center {
    font-size: $font-size-l;
    margin-left: 68px;
    text-align: center;
  }
  .icon-setting,
  .icon-msg {
    font-size: $icon-font-size;
  }
  .icon-setting {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>
