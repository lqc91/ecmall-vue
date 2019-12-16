<template>
  <div class="seller">
    <img class="seller-icon" :src="seller.shopIcon" alt="seller shop icon" />
    <h1 class="seller-name">{{seller.shopName}}</h1>
    <img
      class="tmall-icon"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAAAYCAMAAABtJofvAAAAulBMVEX////NBBXQAzP99fXtuLnz0NHcb3TlnJ713NzZXmbTK0X+/PzVSlb45+fpqaz67u7PBC/ff4POBCriiYzVRFL9+PjvxMTooqX+/f378fHca3HRAznNBBr239/rsrPVPU3SAz7ijZDfen7UN0vTHULNBCH66enuv8DhhYnYWGHOBCz01tfxzMzxx8nqra/kkpXXTVf24eLmnqHedXraY2rTM0jvwsPlmZzll5nYVF7TKEX45OTopqfXS1flFQLwAAAC7klEQVRYw+2X6XKqQBCF5wCiCAqyRDYVFfc9amJM8v6vdRsGIzfXVCT5Y27l/HBOT5VdX/X0TBfsV7/68argnRq0qQTyjJFKkJNFQpfdjDZVrhAxNyva9IGwfaPAJwkQc5Heham3BAMDgTSFKTTZjYkDn+Wj/qOAnS3GP6klpCi9fS05LWxJbrObkZRpimXmKoz1YE7QcMWTVMZFNrfnskzkviG3WBb8ozJjyrYmoZF78eJ2dgxnlYZBdc5vqBwuU6Na0+CFlwEKfxaFXJc1X02zv9IT7z3apmnfi2TlaVlN//xiKNcAl7kaQC+zJcZqjKXAgqZpBmztCFQYyeYPYJQsszsASlNqjw1A5rlAevgAuNZBqogytSLu97W0CNWVJD32AbDr1QSsfKxaBJxyKElzb1HPdXspXe9wUgbsGLB8PH0APEH84KilNWJH7cCeq+qiD9s9n1ox4A5geOdwQXEeuInyBWB7MZ501tv6gQO3YTPPROUSMFmzlqxOpSKOEOiJ1wXcUTrpcWfbu8NDEWBKccyVeIxQ+wu4fhFYY1x1DqyhnZxF4yJwGT12koUVN11YlK6S9UwBYC/CUkI4P8WK0kp6OB0bA9CPeQXwDIKjtlaYepeAxziPHhkSN23IXwJ2qfNc5iN4Zlwtxl7QPV86LboCuAe/IYBU/wzY/yaw2kMwpDJ3ELVyVVgWawnPBBBOLBn9S8D3l1rC+lJL1J4gzBIz7MM4jbTZAJsKdgWAm4Tb1RnTB5gTcJ8DD9x3l04slbzcpRsVBq51Teyzwno74HWkUs1HAXzKIOhXA7tVCHxfpmgOjDzReQaauuhQwuRZO/JnLRLVDjr8WeurhYFDhGPxLVoGwD1jBL6nJlnDeFUETBRl/ynwAiHfJjcYOjGfmU/8k2Bo+GyYDY6ATnMTcx9vWGHg2NrkQ3E5IWBlfxCTFLKBTJ8C+2+vontEmT37BmjRe0ICrEe9ZDSvDcM+nEbzVFjTaH4H/P/pD2QmOrjMDYsdAAAAAElFTkSuQmCC"
    />
    <ul v-if="seller.evaluates && seller.evaluates.length">
      <li class="seller-evaluate" v-for="(item, index) in seller.evaluates" :key="index">
        <span class="title">{{item.title}}</span>:&nbsp;
        <span class="score">{{item.score}}</span>&nbsp;
        <span
          class="level"
          :class="[item.level < 0 ? 'level-low' : 'level-high']"
        >{{item.levelText}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductSeller',
  props: {
    seller: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.seller {
  background-color: #fff;
  padding: 8px;
  margin-bottom: 10px;

  &-icon {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  &-name {
    height: 30px;
    line-height: 30px;
    font-size: $font-size-l;
  }

  .tmall-icon {
    width: 80px;
    height: 13px;
    margin-bottom: 7px;
  }

  &-evaluate {
    display: inline-block;
    margin: 10px 12px 6px 0;
    font-size: $font-size-base;

    .title {
      color: #999;
    }
    .score {
      color: #e61414;
    }
    .level {
      display: inline-block;
      color: #fff;
      width: 15px;
      height: 19px;
      line-height: 19px;
      text-align: center;
      border-radius: 4px;
    }
    .level-high {
      background-color: #e61414;
    }
    .level-low {
      background-color: #32aa3a;
    }
  }
}
</style>
