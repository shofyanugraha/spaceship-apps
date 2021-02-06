<template>
  <div class="searchbox py-6">
    <div class="container">
      <div class="searchbox-holder">
        <h1 class="title is-3 has-text-centered">Starship Finder</h1>
        <div class="columns is-gapless">
          <div class="column">
            <b-input
              id="search-input"
              v-model="search"
              placeholder="Enter keywords"
              @keypress.native.enter="submitSearch"
            ></b-input>
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
    margin: 0 auto;
    max-width: 80%;
    @media screen and (min-width: 767px) {
      max-width: 60%;
    }
  }
  .btn-search {
    width: 100%;
    margin-top: 1rem;
    @media screen and (min-width: 767px) {
      margin-top: 0;
    }
  }
}
</style>
