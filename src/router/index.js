import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    // 一级入口
    name: 'home',
    path: '/home',
    // 路由懒加载
    component: () => import('pages/home'),
    // 二级入口
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart'),
    children: [
      {
        name: 'checkout',
        path: 'checkout',
        component: () => import('pages/checkout')
      }
    ]
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  },
  {
    // 匹配任意路径
    path: '*',
    // 重定向
    redirect: '/home'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
