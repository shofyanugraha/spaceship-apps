<template>
  <b-navbar type="is-primary" class="app-navbar" :mobile-burger="false" centered spaced>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        SWAPI Apps
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        SWAPI Apps
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {}
</script>

<style lang="scss">
.navbar-brand {
  justify-content: center;
}
@media screen and (min-width: 1088px) {
  .app-navbar {
    display: block !important;
  }
  .app-navbar .navbar-brand {
    display: none;
  }
}
</style>
