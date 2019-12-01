<template>
  <div class="slider-wrapper">
    <!-- v-if 判断是否获取到异步数据，未获取显示 loading -->
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
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="img" class="slider-img" />
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from 'base/slider';
import { swiperSlide } from 'vue-awesome-swiper';
import { sliderOptions } from './config';
import { getHomeSlider } from 'api/home';
import MeLoading from 'base/loading';

export default {
  name: 'HomeSlider',
  components: {
    MeSlider,
    MeLoading,
    swiperSlide
  },
  data() {
    return {
      direction: sliderOptions.direction,
      loop: sliderOptions.loop,
      interval: sliderOptions.interval,
      pagination: sliderOptions.pagination,
      sliders: []
    };
  },
  created() {
    // 一般在 created() 中获取远程数据
    this.getSliders();
  },
  methods: {
    update() {
      return this.getSliders();
    },
    getSliders() {
      return getHomeSlider().then(data => {
        this.sliders = data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  height: 183px;
}
.slider-link {
  display: block;
}
.slider-link,
.slider-img {
  width: 100%;
  height: 100%;
}
</style>
