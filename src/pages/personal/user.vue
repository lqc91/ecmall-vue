<template>
  <div class="personal-user user">
    <div class="user-avatar">
      <i class="iconfont icon-personal"></i>
    </div>
    <div class="user-getin">
      <a href="javascript:;" class="user-register">注册</a>
      <span>|</span>
      <a href="javascript:;" class="user-login">登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalUser'
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.user {
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: $header-bgc;

  &-avatar {
    width: 72px;
    height: 72px;
    margin: 0 auto;

    .icon-personal {
      color: $header-bgc;
      background-color: #fff;
      font-size: 72px;
      border-radius: 50%;
    }
  }
  &-getin {
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    margin-top: 20px;
  }
  &-register,
  &-login {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    padding: 0 30px;
  }
}
</style>
