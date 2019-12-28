<template>
  <div class="personal-others others">
    <ul class="others-list">
      <li>
        <a class="others-item" href="javascript:;">
          <p class="item_left">
            <i class="iconfont icon-postsale"></i>
            <span class="item-txt">售后服务</span>
          </p>
          <p class="item_right">
            <i class="iconfont icon-arrow_right"></i>
          </p>
        </a>
      </li>
      <li>
        <a class="others-item" href="javascript:;">
          <p class="item_left">
            <i class="iconfont icon-feedback"></i>
            <span class="item-txt">意见反馈</span>
          </p>
          <p class="item_right">
            <i class="iconfont icon-arrow_right"></i>
          </p>
        </a>
      </li>
      <li>
        <a class="others-item" href="javascript:;">
          <p class="item_left">
            <i class="iconfont icon-address"></i>
            <span class="item-txt">收货地址</span>
          </p>
          <p class="item_right">
            <i class="iconfont icon-arrow_right"></i>
          </p>
        </a>
      </li>
      <li>
        <a class="others-item" href="javascript:;">
          <p class="item_left">
            <i class="iconfont icon-logout"></i>
            <span class="item-txt">退出登录</span>
          </p>
          <p class="item_right">
            <i class="iconfont icon-arrow_right"></i>
          </p>
        </a>
      </li>
      <li>
        <a class="others-item" href="javascript:;">
          <p class="item_left">
            <i class="iconfont icon-hotline"></i>
            <span class="item-txt">400-123-8888</span>
          </p>
          <p class="item_right">
            <i class="iconfont icon-arrow_right"></i>
          </p>
        </a>
      </li>
    </ul>
    <div class="attention">
      <p>客服热线 400-123-8888 (8:00 - 22:00)</p>
      <p>拨打前请记录您的 UID 0</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'personal-others'
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.others {
  margin-bottom: 20px;
}

.others-list {
  background-color: #fff;
  margin-bottom: 20px;
}

.others-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ddd;

  .item-txt {
    display: inline-block;
    vertical-align: sup;
    font-size: $font-size-l + 2;
    color: #000;
  }

  .iconfont {
    color: #666;
    padding: 0 10px;
    font-size: $icon-font-size;
  }
}
.attention {
  padding: 0 10px;
  font-size: $font-size-l;
  line-height: 1.5;
  margin-bottom: 20px;
}
</style>
