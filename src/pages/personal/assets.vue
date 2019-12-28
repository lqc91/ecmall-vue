<template>
  <div class="personal-assets assets">
    <div class="assets-head">
      <i class="iconfont icon-assets"></i>
      <span class="head-txt">我的资产</span>
    </div>
    <ul class="assets-content">
      <li>
        <a class="assets-item" href="javascript:;">
          <i class="iconfont icon-cash-voucher"></i>
          <span>现金券</span>
        </a>
      </li>
      <li>
        <a class="assets-item" href="javascript:;">
          <i class="iconfont icon-red-envelope"></i>
          <span>红包</span>
        </a>
      </li>
      <li>
        <a class="assets-item" href="javascript:;">
          <i class="iconfont icon-balance"></i>
          <span>余额</span>
        </a>
      </li>
      <li>
        <a class="assets-item" href="javascript:;">
          <i class="iconfont icon-gift-card"></i>
          <span>礼品卡</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalAssets'
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.assets {
  background-color: #fff;
  margin-bottom: 20px;
}
.assets-head {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: $font-size-l + 2;
  color: #000;
  border-bottom: 1px solid #ddd;
}
.head-txt {
  display: inline-block;
  vertical-align: top;
}
.icon-assets {
  padding: 0 10px;
  font-size: $icon-font-size;
  color: #666;
}

.assets-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;

  .assets-item {
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
