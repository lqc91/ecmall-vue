<template>
  <div>
    <header class="g-header-container">
      <personal-header />
    </header>
    <div class="g-content-container">
      <personal-user />
      <personal-order />
    </div>
  </div>
</template>

<script>
import PersonalHeader from './header';
import PersonalUser from './user';
import PersonalOrder from './order';
export default {
  name: 'Personal',
  components: {
    PersonalHeader,
    PersonalUser,
    PersonalOrder
  }
};
</script>

<style>
</style>
