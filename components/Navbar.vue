<template>
  <div class="row">
    <div class="gq-navbar navbar w-100">
      <div class="nav-header">
        <nuxt-link 
          to="/" 
          class="navbar-brand">Good Question</nuxt-link>
        <i 
          class="material-icons mobile navbar-burger" 
          @click="navbarExpanded = !navbarExpanded">menu</i>
      </div>
      <ul 
        :class="{'navbar-expanded' : navbarExpanded}" 
        class="navbar-nav bd-navbar-nav">
        <li class="navbar-item">
          <nuxt-link 
            to="/about" 
            class="nav-link">A propos</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link 
            to="/question/new" 
            class="nav-link">Proposez une question</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbarExpanded: false
    }
  }
}
</script>
