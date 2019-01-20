<template>
  <div class="container-fluid min-100 d-flex flex-column">
    <Navbar/>
    <div class="flex-fill">
      <nuxt/>
    </div>
    <Foter/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Foter from '~/components/Foter.vue'

export default {
  components: {
    Navbar,
    Foter
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/theme';
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
