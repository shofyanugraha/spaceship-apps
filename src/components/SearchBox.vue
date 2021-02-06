<template>
  <div class="searchbox py-6">
    <div class="container">
      <div class="searchbox-holder">
        <div class="columns is-gapless">
          <div class="column">
            <b-input v-model="search" @keypress.native.enter="submitSearch"></b-input>
          </div>
          <div class="column is-2">
            <b-button class="btn-search" type="is-primary" @click="submitSearch">Search</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, PropSync, Vue } from "vue-property-decorator";

@Component
export default class SearchBox extends Vue {
  @PropSync("keywords", { type: String }) search!: string;

  submitSearch() {
    this.$emit("doSearch");
  }
}
</script>
<style lang="scss" scoped>
.searchbox {
  background: lighten($warning, 40%);
  &-holder {
    max-width: 60%;
    margin: 0 auto;
  }
  .btn-search {
    width: 100%;
  }
}
</style>
