<template>
  <div class="starship-index">
    <search-box :keywords.sync="keywords" @doSearch="searchStarship"></search-box>

    <div class="container">
      <div class="starship-list">
        <template v-if="starships.length > 0">
          <div class="columns is-multiline">
            <div v-for="(starship, key) in starships" :key="key" class="column is-6">
              <starship-item :item-data="starship" @click.native="clickHandler(starship)" />
            </div>
          </div>
        </template>
        <infinite-loading ref="infiniteScroll" spinner="waveDots" @infinite="infiniteHandler">
          <div slot="no-more">No more starship</div>
          <div slot="no-results">No results stasrhip</div>
        </infinite-loading>
      </div>
    </div>
    <b-modal
      v-model="showDetail"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Detail Starship"
      aria-modal
    >
      <template #default="props">
        <starship-detail :selected="selected" @close="props.close" />
      </template>
    </b-modal>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SET_STARSHIPS, StarshipInterface, starshipModule } from "@/store/modules/starship";

import InfiniteLoading from "vue-infinite-loading";

const SearchBox = () =>
  import(/* webpackChunkName: "search-box-component"*/ "@/components/SearchBox.vue");
const StarshipItem = () =>
  import(/* webpackChunkName: "starship-list-component"*/ "@/components/Starship/StarshipItem.vue");

const StarshipDetail = () =>
  import(
    /* webpackChunkName: "starship-list-component"*/ "@/components/Starship/StarshipDetail.vue"
  );

@Component({
  components: { SearchBox, StarshipItem, StarshipDetail }
})
export default class StarshipIndex extends Vue {
  showDetail = false;
  selected: number | null = null;
  currentPage = 1;
  keywords = "";
  action = "new";
  isLast = false;

  @starshipModule.State("list") starships!: StarshipInterface;
  @starshipModule.Mutation(SET_STARSHIPS) setStarships!: Function;
  @starshipModule.Action("getList") getStarships!: Function;

  $refs!: {
    infiniteScroll: InstanceType<typeof InfiniteLoading>;
  };

  async searchStarship() {
    this.action = "new";
    this.currentPage = 1;
    this.isLast = false;
    await this.getData();
    this.$refs.infiniteScroll.stateChanger.reset();
  }

  async getData() {
    const params: any = {
      page: this.currentPage,
      search: this.keywords
    };
    Object.entries(params).forEach(([key, val]) => {
      if (val === null || val === "") delete params[key];
    });

    const res = await this.getStarships({
      data: params,
      action: this.action
    });
    if (this.action === "new") {
      this.action = "append";
    }

    this.currentPage = this.currentPage + 1;
    if (res.status === 200 && res.data.next === null) {
      this.isLast = true;
    }
    return res;
  }

  async infiniteHandler($state: any) {
    if (!this.isLast) {
      const res: any = await this.getData();

      if (res.status !== 200) {
        $state.complete();
      } else if (res.data.next !== null) {
        $state.loaded();
      } else {
        $state.complete();
      }
    } else {
      $state.loaded();
      $state.complete();
    }
  }

  clickHandler(starship: StarshipInterface) {
    this.showDetail = true;
    const id = starship.url.split("/");
    this.selected = parseInt(id[id.length - 2]);
  }

  mounted() {
    // this.getData();
  }
}
</script>
<style lang="scss" scoped>
.starship-list {
  padding: 0 1rem;
  @media screen and (min-width: 767px) {
    padding: 3rem 0;
  }
}
</style>
