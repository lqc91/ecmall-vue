<template>
  <transition name="product">
    <div class="product">
      <header class="g-header-container">
        <product-header />
      </header>
      <me-scroll>
        <!-- me-scroll 放在 section 内无法滚动，放在外面可以 -->
        <section>
          <product-slider :sliders="sliders" />
          <product-baseinfo :title="title" />
          <product-rate :rate="rate" />
        </section>
      </me-scroll>
      <footer class="g-footer-container">
        <product-footer :shopUrl="shopUrl" />
      </footer>
    </div>
  </transition>
</template>

<script>
import ProductHeader from './header';
import ProductSlider from './slider';
import ProductBaseinfo from './baseinfo';
import ProductRate from './rate';
import ProductFooter from './footer';
import MeScroll from 'base/scroll';
import { getProductDetail } from 'api/product';
export default {
  name: 'Product',
  components: {
    ProductHeader,
    ProductSlider,
    ProductBaseinfo,
    ProductRate,
    ProductFooter,
    MeScroll
  },
  data() {
    return {
      shopUrl: '', // 当前商品所属店铺 url
      sliders: [], // 当前商品 slider 图片
      title: '', // 商品名称
      rate: {} // 商品评价
    };
  },
  created() {
    this.getAsyncData();
  },
  methods: {
    getAsyncData() {
      return getProductDetail(this.$route.params.id).then(data => {
        // 获取当前商品所属店铺 url
        this.shopUrl = data.seller.taoShopUrl;
        // 获取当前商品 slider 图片
        this.sliders = data.item.images;
        this.title = data.item.title;
        this.rate = data.rate;
      });
    }
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
