(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b25c5fe":"d2c6e8cb","chunk-492e1c3c":"69ccd47f","chunk-02fb8ede":"1a034200","chunk-1d453bae":"f9f80a05","chunk-25fad23f":"6e61fe5c","chunk-36d28503":"da0da135","chunk-70cc19ba":"8e0551bc","chunk-ef53b1da":"85820f9a","chunk-f35f8bd8":"8e7ed167"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1b25c5fe":1,"chunk-492e1c3c":1,"chunk-02fb8ede":1,"chunk-25fad23f":1,"chunk-36d28503":1,"chunk-70cc19ba":1,"chunk-ef53b1da":1,"chunk-f35f8bd8":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b25c5fe":"faf906af","chunk-492e1c3c":"d4b42930","chunk-02fb8ede":"71969550","chunk-1d453bae":"31d6cfe0","chunk-25fad23f":"6b2d4e71","chunk-36d28503":"9c8c2030","chunk-70cc19ba":"ee6a690b","chunk-ef53b1da":"993f96f5","chunk-f35f8bd8":"d1717786"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],d.parentNode.removeChild(d),n(o)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ecmall-vue/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05ec":function(e,t,n){"use strict";var r=n("3bd4"),c=n.n(r);c.a},"3bd4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-container",attrs:{id:"app"}},[n("div",{staticClass:"g-view-container"},[n("keep-alive",[n("router-view")],1)],1),n("div",{staticClass:"g-footer-container"},[n("c-tabbar")],1)])},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"g-tabbar"},[n("router-link",{staticClass:"g-tabbar-item",attrs:{to:"/home"}},[n("i",{staticClass:"iconfont icon-home"}),n("span",[e._v("首页")])]),n("router-link",{staticClass:"g-tabbar-item",attrs:{to:"/category"}},[n("i",{staticClass:"iconfont icon-category"}),n("span",[e._v("分类")])]),n("router-link",{staticClass:"g-tabbar-item",attrs:{to:"/cart"}},[n("div",{staticClass:"icon-cart-wrap"},[n("i",{staticClass:"iconfont icon-cart"}),e.cartCount?n("i",{staticClass:"cart-count"},[e._v(e._s(e.cartCount))]):e._e()]),n("span",[e._v("购物车")])]),n("router-link",{staticClass:"g-tabbar-item",attrs:{to:"/personal"}},[n("i",{staticClass:"iconfont icon-personal"}),n("span",[e._v("我")])])],1)},u=[],i={name:"CTabbar",computed:{cartCount:function(){return this.$store.state.cartCount}}},s=i,f=(n("05ec"),n("2877")),l=Object(f["a"])(s,o,u,!1,null,"62004aa6",null),d=l.exports,p={name:"App",components:{CTabbar:d}},h=p,m=Object(f["a"])(h,c,a,!1,null,null,null),b=m.exports,k=(n("d3b7"),n("8c4f"));r["a"].use(k["a"]);var v=[{name:"home",path:"/home",component:function(){return Promise.all([n.e("chunk-492e1c3c"),n.e("chunk-1d453bae"),n.e("chunk-25fad23f")]).then(n.bind(null,"f5b8"))},children:[{name:"home-product",path:"product/:id",component:function(){return Promise.all([n.e("chunk-492e1c3c"),n.e("chunk-f35f8bd8")]).then(n.bind(null,"6569"))}}]},{name:"category",path:"/category",component:function(){return Promise.all([n.e("chunk-492e1c3c"),n.e("chunk-1d453bae"),n.e("chunk-70cc19ba")]).then(n.bind(null,"304c"))}},{name:"cart",path:"/cart",component:function(){return Promise.all([n.e("chunk-492e1c3c"),n.e("chunk-1d453bae"),n.e("chunk-36d28503")]).then(n.bind(null,"e16e"))},children:[{name:"checkout",path:"checkout",component:function(){return n.e("chunk-1b25c5fe").then(n.bind(null,"7917"))}}]},{name:"personal",path:"/personal",component:function(){return Promise.all([n.e("chunk-492e1c3c"),n.e("chunk-02fb8ede")]).then(n.bind(null,"034d"))}},{name:"search",path:"/search",component:function(){return Promise.all([n.e("chunk-492e1c3c"),n.e("chunk-1d453bae"),n.e("chunk-ef53b1da")]).then(n.bind(null,"efe3"))}},{path:"*",redirect:"/home"}],g=new k["a"]({mode:"history",base:"/ecmall-vue/",routes:v}),y=g,C=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),O=n("2f62");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(C["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}r["a"].use(O["a"]);var j=new O["a"].Store({state:{itemTmp:{},cartCount:0,cartItems:[]},mutations:{replaceItemTmp:function(e,t){e.itemTmp={},e.itemTmp=t},setItemTmp:function(e,t){e.itemTmp=t},addCartCount:function(e){e.cartCount++},addCartItems:function(e,t){this.set(t,t.num,t.num++);var n=!1;e.cartItems&&e.cartItems.length&&e.cartItems.forEach((function(e){if(e.id===t.id)return n=!0,e.num++})),n||(e.cartItems=P({},e.cartItems,{payload:t}))}},actions:{replaceItemTmp:function(e,t){e.commit("replaceItemTmp",t)},setItemTmp:function(e,t){e.commit("setItemTmp",t)},addCartCount:function(e){e.commit("addCartCount")},addCartItems:function(e,t){var n=e.dispatch,r=e.commit;return new Promise((function(e,t){n("setItemTmp")})).then((function(){r("addCartItems",t)}))}},modules:{}}),T=n("697a");n("a41b"),n("455b");r["a"].use(T["a"],{preload:1,error:n("b948"),loading:n("f8b2"),attempt:1}),r["a"].config.productionTip=!1,new r["a"]({router:y,store:j,render:function(e){return e(b)}}).$mount("#app")},a41b:function(e,t,n){},b948:function(e,t,n){e.exports=n.p+"img/error.d44fdc0d.png"},f8b2:function(e,t,n){e.exports=n.p+"img/loading.5c9b3522.gif"}});
//# sourceMappingURL=app.5559f0da.js.map