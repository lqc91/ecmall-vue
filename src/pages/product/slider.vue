<template>
  <div :style="sliderSize" class="slider-wrapper">
    <me-loading v-if="!sliders.length" />
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
    >
      <swiper-slide v-for="(item, index) in sliders" :key="index">
        <img :src="item" class="slider-img" alt="product image" />
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from 'base/slider';
import MeLoading from 'base/loading';
import { swiperSlide } from 'vue-awesome-swiper';
import { getProductDetail } from 'api/product';
import { sliderOptions } from './config';

export default {
  name: 'ProductSlider',
  components: {
    MeSlider,
    MeLoading,
    swiperSlide
  },
  data() {
    return {
      sliderSize: {
        width: window.innerWidth + 'px',
        height: window.innerWidth + 'px'
      },
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    };
  },
  created() {
    // 监听视口大小变化，并设置 slider 宽高
    window.addEventListener('resize', this.setSliderSize);
    this.getSliders();
  },
  methods: {
    setSliderSize() { // 设置 slider 宽高
      this.sliderSize = {
        width: window.innerWidth + 'px',
        height: window.innerWidth + 'px'
      };
    },
    update() {
      return this.getSliders();
    },
    getSliders() {
      // 获取 slider 图片
      return getProductDetail(this.$route.params.id).then(data => {
        this.sliders = data.item.images;
      });
    }
  },
  destroyed() {
    // 销毁视口大小变化监听器
    window.removeEventListener('resize', this.setSliderSize);
  }
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  max-width: 640px;
  max-height: 640px;
  min-width: 320px;
  min-height: 320px;
}
.slider-img {
  width: 100%;
}
</style>
