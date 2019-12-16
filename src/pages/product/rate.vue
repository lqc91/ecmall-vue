<template>
  <div class="rate" v-if="rate">
    <p class="rate-title">商品评价 ({{rate.totalCount}})</p>
    <ul class="rate-keyword-list" v-if="rate.keywords && rate.keywords.length">
      <li
        class="rate-keyword"
        v-for="(item, index) in rate.keywords"
        :key="index"
      >{{item.word}}({{item.count}})</li>
    </ul>
    <ul v-if="rate.rateList && rate.rateList.length">
      <li v-for="(item, index) in rate.rateList" :key="index">
        <p>
          <img class="rate-headpic" :src="item.headPic" alt="user head picture" />
          <span>{{item.userName}}</span>
        </p>
        <p class="rate-content">{{item.content}}</p>
        <p>
          <span class="rate-date">{{item.dateTime}}</span>
          <span class="rate-skuinfo" v-if="item.skuInfo">{{item.skuInfo}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductRate',
  props: {
    rate: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.rate {
  padding: 8px;
  margin-bottom: 10px;
  background-color: #fff;

  &-title {
    font-size: $font-size-l;
    padding: 5px 0;
  }

  &-keyword-list {
    margin: 0 -5px;
  }

  &-keyword {
    display: inline-block;
    font-size: $font-size-base;
    line-height: 1.5;
    padding: 3px 6px;
    margin: 5px;
    border-radius: 6px;
    background-color: #ffeeee;
  }

  &-headpic {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin: 8px 8px 8px 0;
  }

  &-content,
  &-date,
  &-skuinfo {
    font-size: $font-size-base;
    line-height: 1.5;
    padding: 3px 0;
  }
  &-date {
    color: #999;
    margin-right: 8px;
  }
  &-skuinfo {
    color: #999;
  }
}
</style>
