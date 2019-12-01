<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading" />
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <template v-slot:scrollbar>
      <div class="swiper-scrollbar" v-if="scrollbar"></div>
    </template>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import MeLoading from 'base/loading';
import {
  PULL_DOWN_HEIGHT,
  PULL_DOWN_TEXT_INIT,
  PULL_DOWN_TEXT_START,
  PULL_DOWN_TEXT_ING,
  PULL_DOWN_TEXT_END
} from './config';

export default {
  name: 'MeScroll',
  components: {
    swiper,
    swiperSlide,
    MeLoading
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
    },
    pullDown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return { // 下拉参数设置
      pulling: false,
      pullDownText: PULL_DOWN_TEXT_INIT,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        on: {
          sliderMove: this.scroll,
          touchEnd: this.touchEnd
        }
      }
    };
  },
  watch: {
    data() {
      this.update();
    }
  },
  methods: {
    update() {
      this.$refs.swiper && this.$refs.swiper.swiper.update();
    },

    scroll() {
      const swiper = this.$refs.swiper.swiper;

      if (this.pulling) {
        return;
      }

      if (swiper.translate > 0) { // 下拉
        if (!this.pullDown) {
          return;
        }

        if (swiper.translate > PULL_DOWN_HEIGHT) {
          // this.pullDownText = '111'; // 直接改变pullDownText 的值，会导致重新渲染时页面闪动
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
        }
      }
    },
    touchEnd() {
      if (this.pulling) {
        return;
      }

      const swiper = this.$refs.swiper.swiper;
      if (swiper.translate > PULL_DOWN_HEIGHT) { // 下拉
        if (!this.pullDown) {
          return;
        }

        this.pulling = true;
        swiper.allowTouchMove = false;// 禁止触摸
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(PULL_DOWN_HEIGHT);
        swiper.params.virtualTranslate = true;// 定住不给回弹
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
        this.$emit('pull-down', this.pullDownEnd);// 触发一个事件
      }
    },
    pullDownEnd() {
      const swiper = this.$refs.swiper.swiper;

      this.pulling = false;
      this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
      swiper.params.virtualTranslate = false;
      swiper.allowTouchMove = true;
      swiper.setTransition(swiper.params.speed);
      swiper.setTranslate(0);
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: auto;
}

.mine-scroll-pull-down {
  position: absolute;
  left: 0;
  bottom: 100%; // 默认不可见
  width: 100%;
  height: 80px;
}
</style>
