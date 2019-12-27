<template>
  <div class="cart-content">
    <me-scroll :data="productList">
      <!-- 定义购物车页面图标 -->
      <svg
        style="position: absolute; width: 0; height: 0; overflow: hidden;"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <symbol id="icon-ok" viewBox="0 0 32 32">
            <title>ok</title>
            <path
              class="path1"
              d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"
            />
          </symbol>
          <symbol id="icon-del" viewBox="0 0 32 32">
            <title>delete</title>
            <path
              class="path1"
              d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            />
            <path
              class="path2"
              d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            />
            <path
              class="path3"
              d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            />
            <path
              class="path4"
              d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            />
          </symbol>
        </defs>
      </svg>
      <ul class="product-list">
        <li class="product-item" v-for="(item, index) in productList" :key="index">
          <div class="product-item-tab_top">
            <a
              href="javascipt:;"
              class="product-check check-btn"
              :class="{checked: item.checked}"
              @click="check(item)"
            >
              <svg class="icon icon-ok">
                <use xlink:href="#icon-ok" />
              </svg>
            </a>
            <img class="product-img" :src="'/imgs/' + item.productImage" alt="product picture" />
            <h1 class="product-name">{{item.productName}}</h1>
            <a href="javascript:;" class="product-del" @click="delConfirm(item)">
              <svg class="icon icon-del">
                <use xlink:href="#icon-del" />
              </svg>
            </a>
          </div>
          <div class="product-item-tab_bottom">
            <div class="product-count">
              <button class="count-btn_sub" @click="editNum('sub', item)">-</button>
              <input class="count-num" :value="item.productNum" />
              <button class="count-btn_add" @click="editNum('add', item)">+</button>
            </div>
            <span class="product-price">{{(item.productPrice * item.productNum) | currency}}</span>
          </div>
        </li>
      </ul>
    </me-scroll>
    <div class="checkout">
      <a href="javascipt:;" class="checkout-check" @click="toggleCheckAll">
        <span class="checkout-check_btn check-btn" :class="{checked: checkAll}">
          <svg class="icon icon-ok">
            <use xlink:href="#icon-ok" />
          </svg>
        </span>
        <span class="checkout-check_txt">全选</span>
      </a>
      <span class="checkout-price">
        总价:
        <i class="checkout-price_num">{{totalPrice | currency}}</i>
      </span>
      <button class="checkout-btn" :class="checkOutCount ? 'active' : 'dis'" @click="checkOut">结算</button>
    </div>
    <me-confirm ref="confirm" msg="确定要删除该商品吗？" @confirm="delProduct" />
  </div>
</template>

<script>
import MeScroll from 'base/scroll';
import MeConfirm from 'base/confirm';
import { getCartList } from 'api/cart.js';
export default {
  name: 'CartContent',
  components: {
    MeScroll,
    MeConfirm
  },
  data() {
    return {
      productList: [],
      delGoods: {} // 待删除商品
    };
  },
  filters: {
    currency(value) {
      if (!value || typeof value !== 'number') return 0.00;
      return '￥' + value.toFixed(2) + '元';
    }
  },
  mounted() {
    this.init();
  },
  computed: {
    checkAll() {
      if (this.productList && this.productList.length) {
        return this.productList.every(item => {
          return item.checked;
        });
      } else {
        return false;
      }
    },
    totalPrice() {
      let money = 0;
      this.productList.forEach(item => {
        if (item.checked) {
          money += item.productPrice * item.productNum;
        }
      });
      return money;
    },
    checkOutCount() {
      return this.productList.some(item => {
        return item.checked;
      });
    }
  },
  methods: {
    init() {
      getCartList().then(data => {
        this.productList = data;
      });
    },
    check(item) {
      item.checked = !item.checked;
    },
    toggleCheckAll() {
      let flag = !this.checkAll;
      this.productList.forEach(item => {
        item.checked = flag;
      });
    },
    editNum(type, item) {
      if (type === 'add') {
        item.productNum++;
      } else if (type === 'sub' && item.productNum > 0) {
        item.productNum--;
      } else {
        return null;
      }
    },
    delConfirm(item) {
      this.delGoods = item;
      this.$refs.confirm.show();
    },
    delProduct() {
      this.productList.forEach((item, index) => {
        if (item.productId === this.delGoods.productId) {
          this.productList.splice(index, 1);
        }
      });
    },
    checkOut() {
      if (this.checkOutCount) {
        this.$router.push('cart/checkout').catch(err => {
          throw new Error(err);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.cart-content {
  width: 100%;
  position: absolute;
  top: 50px;
  bottom: 90px;
}
.product-item {
  background-color: #fff;
  margin-bottom: 10px;

  &-tab_top {
    display: flex;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #ddd;
  }
  &-tab_bottom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
  }
}
.product-check {
  flex-shrink: 0;
}
.product-img {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  font-size: 0;
}
.product-name {
  flex-grow: 1;
  font-size: $font-size-base;
  line-height: 1.5;
  max-height: 36px;
  margin-left: 15px;
  @include multiline-ellipsis();
}
.product-del {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin: 0 15px;

  .icon-del {
    width: 100%;
    height: 100%;
    fill: #999;
  }
}
.product-count {
  height: 22px;
  border: 1px solid #eee;

  .count-btn_sub,
  .count-btn_add {
    display: inline-block;
    width: 30px;
    height: 20px;
    background-color: #eee;
  }
  .count-num {
    display: inline-block;
    width: 25px;
    height: 20px;
    text-align: center;
  }
}
.product-price {
  color: $header-bgc;
  font-weight: bold;
  margin: 0 10px;
}
.checkout {
  position: fixed;
  bottom: 50px;
  z-index: $navbar-z-index;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 640px;
  height: 40px;
  background-color: #fff;

  &-check {
    display: flex;
    align-items: center;
    width: 80px;
    height: 100%;

    &_btn {
      flex-shrink: 0;
    }

    &_txt {
      font-size: $font-size-l;
    }
  }

  &-price {
    flex-shrink: 0;
    font-size: $font-size-l;

    &_num {
      color: $header-bgc;
      font-weight: bold;
    }
  }

  &-btn {
    flex-shrink: 0;
    height: 100%;
    padding: 0 30px;
    color: #fff;
    font-weight: bold;
    font-size: $font-size-l;
  }

  &-btn.active {
    background-color: $header-bgc;
  }
  &-btn.dis {
    background-color: #999;
  }
}
.check-btn {
  width: 20px;
  height: 20px;
  margin: 0 15px;
  border-radius: 50%;
  border: 1px solid #999;
}
.checked {
  border: 0;
  background-color: $header-bgc;
}
.icon-ok {
  width: 100%;
  height: 100%;
  fill: #fff;
  transform: scale(0.6);
}
</style>
