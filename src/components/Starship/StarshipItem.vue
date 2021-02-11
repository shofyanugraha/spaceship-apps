<template>
  <div class="starship-item card">
    <div class="card-content">
      <h3 class="title is-5">
        <a href="javascript:void(0)" @click="$emit('showDetail')">
          {{ itemData.name }}
        </a>
      </h3>
      <div class="subtitle is-6">
        {{ itemData.model }}
      </div>
      <div class="starship-meta mb-3">
        <div class="starship-meta-item">
          <film-icon size="16" /> {{ itemData.films.length }} Films
        </div>
        <div class="starship-meta-item">
          <user-icon size="16" /> {{ itemData.pilots.length }} Pilots
        </div>

        <div class="starship-meta-item">
          <clock-icon size="16" /> Created
          {{ $date(itemData.created).format("DD-MM-YYYY") }}
        </div>
        <div class="starship-meta-item">
          <clock-icon size="16" /> Updated
          {{ $date(itemData.updated).format("DD-MM-YYYY") }}
        </div>
      </div>
      <b-button class="btn-edit" size="is-small" type="is-primary" @click="$emit('editHandler')"
        >Edit</b-button
      >
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ClockIcon, FilmIcon, PackageIcon, UserIcon } from "vue-feather-icons";
import { StarshipInterface } from "@/store/modules/starship";

@Component({
  components: {
    ClockIcon,
    FilmIcon,
    PackageIcon,
    UserIcon
  }
})
export default class StarshipItem extends Vue {
  @Prop({ required: true }) itemData!: StarshipInterface;
}
</script>

<style lang="scss" scoped>
.btn-view {
  border-radius: 4px;
  width: 100%;
}
svg {
  vertical-align: middle;
  margin-right: 0.1rem;
}
.starship-item {
  margin-bottom: 0.5rem;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    margin-bottom: 1rem;
  }
  .title {
    margin-bottom: 0.25rem;
  }
  .subtitle {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
}
.starship-meta {
  &-item {
    display: inline-block;
    font-size: 0.9rem;
    color: #999;
    &:not(:last-child) {
      margin-right: 0.75rem;
      margin-bottom: 0.25rem;
    }
  }
}
</style>
