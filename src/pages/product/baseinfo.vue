<template>
  <div>
    <div class="saleInfo">
      <div class="baseData">
        <p class="actPrice">
          <i class="sign">￥</i>
          <span>{{baseData.actPrice}}</span>
        </p>
        <del class="origPrice">￥{{baseData.origPrice}}</del>
        <span class="soldCount">
          <i class="num">{{baseData.soldCount}}</i>&nbsp;件已售
        </span>
      </div>
      <div class="actTimeLeft">
        <p class="txt">距结束仅剩</p>
        <p>
          <span class="num">{{actTimeLeft.hours}}</span>
          <i class="dot">:</i>
          <span class="num">{{actTimeLeft.minutes}}</span>
          <i class="dot">:</i>
          <span class="num">{{actTimeLeft.seconds}}</span>
          <i class="dot">:</i>
          <span class="num">{{actTimeLeft.tenMs}}</span>
        </p>
      </div>
    </div>
    <div class="baseTxt">
      <p class="title">{{title}}</p>
      <ul class="features clearfix" v-if="features.length">
        <li class="item" v-for="(item, index) in features" :key="index">{{item}}</li>
      </ul>
      <ul class="tags clearfix" v-if="tags.length">
        <li class="item" v-for="(item, index) in tags" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getProductBaseInfo, calcTimeLeft } from 'api/product';
export default {
  name: 'ProductBaseinfo',
  props: {
    title: String
  },
  data() {
    return {
      baseData: {},
      actTimeLeft: {},
      features: [],
      tags: []
    };
  },
  created() {
    this.getBaseInfo();
  },
  methods: {
    getBaseInfo() {
      return getProductBaseInfo(this.$route.params.id, this.$route.params.juId).then(item => {
        this.baseData = {
          actPrice: item.activityPrice / 100,
          origPrice: (item.originalPrice / 100).toFixed(2),
          soldCount: item.soldCount
        };
        // 比聚划算时间快了一秒？
        this.actTimeLeft = calcTimeLeft(item.onlineStartTime, item.onlineEndTime);
        setInterval(() => {
          this.actTimeLeft = calcTimeLeft(item.onlineStartTime, item.onlineEndTime);
        }, 100);
        this.features = item.picFeature.itemFeatures;
        this.tags = item.showTagNames;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.saleInfo {
  position: relative;
  width: 100%;
  height: 54px;
  color: #fff;
}
.baseData {
  height: 54px;
  background-color: #e61414;

  .actPrice {
    float: left;
    height: 54px;
    line-height: 54px;
    font-size: 42px;
    padding: 0 6px;
    vertical-align: text-bottom;
    .sign {
      letter-spacing: -5px;
      font-size: $icon-font-size;
    }
  }
  .origPrice {
    position: absolute;
    bottom: 10px;
    padding: 0 6px;
    font-size: $font-size-base;
  }
  .soldCount {
    position: absolute;
    top: 12px;
    padding: 0 6px;
    font-size: $font-size-base;

    .num {
      font-size: $font-size-l;
    }
  }
  // 若为价格区间，使用以下样式
  // .actPrice {
  //   font-size: 24px;
  //   height: 34px;
  //   line-height: 34px;
  //   padding: 0 6px;
  //   .sign {
  //     font-size: $font-size-base;
  //   }
  // }
  // .origPrice,
  // .soldCount {
  //   float: left;
  //   padding: 0 6px;
  //   font-size: $font-size-base;
  // }
}

.actTimeLeft {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100%;
  text-align: center;
  padding: 10px 6px 10px 12px;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#fef391), to(#fbe253));

  &:before {
    position: absolute;
    top: 0;
    right: 94px;
    content: "";
    border-width: 27px 6px;
    border-style: solid;
    border-color: #e61414 transparent #d41414 #e61414;
  }
  .txt {
    height: 16px;
    line-height: 16px;
    margin-bottom: 3px;
    color: #9e495b;
  }
  .num {
    display: inline-block;
    min-width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 3px;
    background-color: #690b08;
  }
  .dot {
    color: grey;
  }
}

.baseTxt {
  margin-bottom: 10px;
  padding: 8px;
  background-color: #fff;
  .title,
  .features,
  .tags {
    line-height: 18px;
    font-size: $font-size-l;
  }
  .features,
  .tags {
    .item {
      float: left;
      margin: 8px 10px 4px 0;
    }
  }
  .features {
    color: #b96d2c;
  }
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: block;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
</style>
