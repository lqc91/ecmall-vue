<template>
  <div class="detail">
    <me-slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      :clickable="clickable"
      :renderBullet="renderBullet"
    >
      <swiper-slide>
        <div v-if="detailPic && detailPic.length">
          <img
            class="detail-pic"
            v-for="(item, index) in detailPic"
            :key="index"
            v-lazy="item"
            alt="detail picture"
          />
        </div>
        <div class="no-data" v-else>没有商品详情</div>
      </swiper-slide>
      <swiper-slide>
        <p class="no-data">由于接口校验，无法获取数据</p>
      </swiper-slide>
      <swiper-slide>
        <ul class="parameter" v-if="parameter &&parameter.length">
          <li v-for="(item, index) in parameter" :key="index">
            <p class="parameter-item" v-for="(value, name) in item" :key="name">
              <span class="parameter-name">{{name}}：</span>
              <span>{{value}}</span>
            </p>
          </li>
        </ul>
        <p class="no-data" v-else>没有商品参数</p>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import MeSlider from 'base/slider';
import { swiperSlide } from 'vue-awesome-swiper';
import { detailSliderOptions } from './config';
import { getProductDetailPic, getProductRateList } from 'api/product';

export default {
  name: 'ProductDetail',
  components: {
    MeSlider,
    swiperSlide
  },
  props: {
    parameter: Array
  },
  data() {
    return {
      direction: detailSliderOptions.direction,
      loop: detailSliderOptions.loop,
      interval: detailSliderOptions.interval,
      pagination: detailSliderOptions.pagination,
      clickable: detailSliderOptions.clickable,
      renderBullet: detailSliderOptions.renderBullet,
      detailPic: []
    };
  },
  created() {
    this.getDetailPic();
    this.getRateList();
  },
  methods: {
    update() {
      return this.getDetailPic();
    },
    getDetailPic() {
      return getProductDetailPic(this.$route.params.id).then(data => {
        this.detailPic = data;
        this.$emit('loaded', this.detailPic);
      });
    },
    getRateList() {
      return getProductRateList(this.$route.params.id, 1, 10).then(data => {
        console.log(data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.detail {
  margin-bottom: 35px;
  padding-top: 43px;
  background-color: #fff;
  overflow: hidden;
}
.detail-pic {
  width: 100%;
}
.parameter {
  padding: 20px;
  font-size: $font-size-l;

  &-item {
    line-height: 30px;
  }

  &-name {
    color: #999;
  }
}
.no-data {
  padding-top: 50px;
  text-align: center;
}
</style>
<style lang="scss">
@import "~assets/scss/mixins";

.detail {
  .swiper-container {
    overflow: visible;
    .swiper-pagination {
      height: 43px;
      top: -42px;
      bottom: 100%;
      border-bottom: 1px solid #ddd;
      .swiper-pagination-bullet {
        width: 100px;
        height: 42px;
        line-height: 40px;
        border-bottom: 2px solid #fff;
        border-radius: 0;
        background-color: #fff;
        opacity: 1;
        margin: 0;
        font-size: $font-size-l;
      }

      .swiper-pagination-bullet-active {
        color: #e61414;
        border-bottom-color: #e61414;
      }
    }
  }
}
</style>
