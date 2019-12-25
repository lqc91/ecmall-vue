import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemTmp: {}, // 缓存商品详情页商品基本信息
    cartCount: 0, // 购物车商品数量
    cartItems: [] // 购物车商品信息
  },
  mutations: {
    replaceItemTmp(state, payload) {
      state.itemTmp = {};
      state.itemTmp = payload;
    },
    setItemTmp(state, payload) {
      state.itemTmp = payload;
    },
    addCartCount(state) {
      state.cartCount++;
    },
    addCartItems(state, payload) {
      this.set(payload, payload.num, payload.num++);
      let existence = false;
      if (state.cartItems && state.cartItems.length) {
        state.cartItems.forEach(value => {
          if (value.id === payload.id) {
            existence = true;
            return value.num++;
          }
        });
      }
      if (!existence) {
        state.cartItems = { ...state.cartItems, payload };
      }
    }
  },
  actions: {
    replaceItemTmp(context, payload) {
      context.commit('replaceItemTmp', payload);
    },
    setItemTmp(context, payload) {
      context.commit('setItemTmp', payload);
    },
    addCartCount(context) {
      context.commit('addCartCount');
    },
    // async addCartItems(context, payload) {
    //   await context.dispatch('setItemTmp');
    //   console.log(context.itemTmp);
    //   context.commit('addCartItems', payload);
    // }
    addCartItems({ dispatch, commit }, payload) {
      return new Promise((resolve, reject) => {
        dispatch('setItemTmp');
        console.log(this.$store.itemTmp);
      }).then(() => {
        commit('addCartItems', payload);
      });
    }
  },
  modules: {
  }
});
