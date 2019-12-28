<template>
  <div class="personal-order order">
    <div class="order-head">
      <p class="head_left">
        <i class="iconfont icon-order"></i>
        <span class="head_left_txt">我的订单</span>
      </p>
      <a class="head_right" href="javascript:;">
        <span class="head_right_txt">查看我的的全部订单</span>
        <i class="iconfont icon-arrow_right"></i>
      </a>
    </div>
    <ul class="order-content">
      <li>
        <a class="order-item" href="javascript:;">
          <i class="iconfont icon-unpayed"></i>
          <span>待付款</span>
        </a>
      </li>
      <li>
        <a class="order-item" href="javascript:;">
          <i class="iconfont icon-unreceived"></i>
          <span>待收货</span>
        </a>
      </li>
      <li>
        <a class="order-item" href="javascript:;">
          <i class="iconfont icon-unevaluated"></i>
          <span>待评价</span>
        </a>
      </li>
      <li>
        <a class="order-item" href="javascript:;">
          <i class="iconfont icon-refund"></i>
          <span>退货/退款</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalOrder'
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.order {
  margin-bottom: 20px;
  background-color: #fff;
}

.order-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ddd;

  .head_left {
    &_txt {
      color: #000;
      font-size: $font-size-l + 2;
    }
  }

  .head_right {
    &_txt {
      color: #999;
      font-size: $font-size-l;
    }
  }

  .icon-order,
  .icon-arrow_right {
    padding: 0 10px;
    font-size: $icon-font-size-sm;
  }
}

.order-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;

  .order-item {
    @include flex-center(column);
    font-size: $font-size-l;
    color: #666;

    .iconfont {
      font-size: $icon-font-size;
      padding-bottom: 10px;
      color: #666;
    }
  }
}
</style>
