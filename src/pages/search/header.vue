<template>
  <me-navbar class="header">
    <template v-slot:left>
      <i class="iconfont icon-back" @click="goBack"></i>
    </template>
    <template v-slot:center>
      <me-search-box placeholder="开学季有礼，好货5折起" @query="query" />
    </template>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar';
import MeSearchBox from 'base/search-box';

export default {
  name: 'SearchHeader',
  components: {
    MeNavbar,
    MeSearchBox
  },
  methods: {
    query(query) {
      this.$emit('query', query);
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

.header {
  border-bottom: 1px solid $border-color;

  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size;
  }

  .mine-search-box-wrapper {
    background-color: #f7f7f7;
  }
}
</style>
