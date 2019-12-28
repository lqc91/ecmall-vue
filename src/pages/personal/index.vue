<template>
  <div class="personal">
    <header class="g-header-container">
      <personal-header />
    </header>
    <div class="g-content-container">
      <me-scroll>
        <personal-user />
        <personal-order />
        <personal-assets />
        <personal-others />
      </me-scroll>
    </div>
  </div>
</template>

<script>
import PersonalHeader from './header';
import PersonalUser from './user';
import PersonalOrder from './order';
import PersonalAssets from './assets';
import PersonalOthers from './others';
import MeScroll from 'base/scroll';
export default {
  name: 'Personal',
  components: {
    PersonalHeader,
    PersonalUser,
    PersonalOrder,
    PersonalAssets,
    PersonalOthers,
    MeScroll
  }
};
</script>

<style lang="scss" scoped>
.personal {
  height: 100%;
}
</style>
