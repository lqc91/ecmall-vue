<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <div class="icon-cart-wrap">
        <i class="iconfont icon-cart"></i>
        <i class="cart-count" v-if="cartCount">{{cartCount}}</i>
      </div>
      <span>购物车</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont icon-personal"></i>
      <span>我</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CTabbar',
  computed: {
    cartCount() {
      return this.$store.state.cartCount;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.router-link-active {
  color: $link-active-color;
}
.icon-cart-wrap {
  position: relative;

  .cart-count {
    position: absolute;
    top: -4px;
    right: -6px;
    padding: 0 2px;
    min-width: 14px;
    height: 14px;
    line-height: 14px;
    text-align: center;
    border: 1px solid $header-bgc;
    border-radius: 7px;
    color: $header-bgc;
    background-color: #fff;
    font-size: 10px;
  }
}
</style>
