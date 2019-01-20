<template>
  <div class="row">
    <div class="gq-navabar navbar w-100">
      <nuxt-link
        to="/"
        class="navbar-brand"
      >
        Good Question
      </nuxt-link>
      <ul class="navbar-nav bd-navbar-nav flex-row">
        <li class="navbar-item">
          <nuxt-link
            to="/about"
            class="nav-link"
          >
            A propos
          </nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link
            to="/question/new"
            class="nav-link"
          >
            Proposez une question
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
