<template>
  <div class="home">
    <header class="g-header-container">
      <home-header />
    </header>
    <me-scroll>
      <home-slider />
    </me-scroll>
    <div class="g-backtop-container"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import MeScroll from 'base/scroll';
import HomeHeader from './header';
import HomeSlider from './slider';

export default {
  name: 'Home',
  components: {
    MeScroll,
    HomeHeader,
    HomeSlider
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: $bgc-theme;
}
</style>
