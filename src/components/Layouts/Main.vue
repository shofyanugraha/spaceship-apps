<template>
  <div class="main-layout">
    <app-header />

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const AppHeader = () =>
  import(/* webpackChunkName: "app-header-component"*/ "@/components/Layouts/AppHeader.vue");

@Component({
  components: {
    AppHeader
  }
})
export default class Main extends Vue {}
</script>
