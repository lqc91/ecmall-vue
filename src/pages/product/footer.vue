<template>
  <div class="footer">
    <div class="footer-left">
      <a :href="shopUrl" class="footer-left-item">
        <i class="iconfont icon-shop"></i>
        <span>店铺</span>
      </a>
      <a href="javascript:;" class="footer-left-item">
        <i class="iconfont icon-service"></i>
        <span>客服</span>
      </a>
      <a to="javascript:;" class="footer-left-item">
        <i class="iconfont icon-collect"></i>
        <span>收藏</span>
      </a>
    </div>
    <button class="footer-center" @click="addToCart">加入购物车</button>
    <button class="footer-right">马上抢</button>
  </div>
</template>

<script>
export default {
  name: 'ProductFooter',
  props: {
    shopUrl: String // 当前商品所属店铺 url
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addCartCount');
      this.$store.dispatch('addCartItems', this.$store.itemTmp);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.footer {
  display: flex;
  width: 100%;
  height: 35px;

  &-left {
    flex: 4;
    display: flex;
    font-size: $font-size-base - 2px;
    background-color: #fff;

    &-item {
      flex: 1;
      @include flex-center(column);
      .iconfont {
        margin-bottom: 2px;
      }
    }
  }

  &-center,
  &-right {
    flex: 3;
    color: #fff;
    font-size: $font-size-base;
  }

  &-center {
    background-color: #ff9500;
  }

  &-right {
    background-color: #ff0036;
  }
}
</style>
