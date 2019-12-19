<template>
  <swiper :options="swiperOption" :key="keyId">
    <slot></slot>
    <template v-slot:pagination>
      <div class="swiper-pagination" v-if="pagination"></div>
    </template>
  </swiper>
</template>

<script>
import { swiper } from 'vue-awesome-swiper';

export default {
  name: 'MeSlider',
  components: {
    swiper
  },
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return [
          'horizontal',
          'vertical'
        ].indexOf(value) > -1;
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator(value) {
        return value >= 0;
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    clickable: {
      type: Boolean,
      default: false
    },
    renderBullet: {
      type: Function,
      default() {
        return '<span class="swiper-pagination-bullet"></span>';
      }
    }
  },
  data() {
    return {
      keyId: Math.random()
    };
  },
  watch: {
    data(newData) {
      if (newData.length === 0) {
        return;
      }
      this.swiperOption.loop = newData.length === 1 ? false : this.loop; // 刷新修改 loop
      this.keyId = Math.random();
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.swiperOption = {
        // 只有 1 个 slide (非 loop)，swiper 失效且隐藏导航等
        watchOverflow: true,
        direction: this.direction,
        autoplay: this.interval ? {
          delay: this.interval,
          disableOnInteraction: false
        } : false,
        // 设置 slider 容器能够同时显示的 slides 数量
        slidesPerView: 1,
        loop: this.data.length <= 1 ? false : this.loop, // 边界条件，仅一张图片，不开启
        pagination: {
          el: this.pagination ? '.swiper-pagination' : null,
          clickable: this.clickable,
          renderBullet: this.renderBullet
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
</style>
