<template>
  <div>
    <header class="g-header-container">
      <personal-header />
    </header>
    <div class="g-content-container">
      <personal-user />
    </div>
  </div>
</template>

<script>
import PersonalHeader from './header';
import PersonalUser from './user';
export default {
  name: 'Personal',
  components: {
    PersonalHeader,
    PersonalUser
  }
};
</script>

<style>
</style>
