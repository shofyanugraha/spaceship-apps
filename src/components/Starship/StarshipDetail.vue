<template>
  <div class="starship-detail">
    <div class="modal-card" style="max-width: 800px; min-width: 300px">
      <header class="modal-card-head">
        <h4 class="modal-card-title">Detail Starship</h4>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>

      <section class="modal-card-body">
        <div class="columns is-multiline">
          <div class="column is-6">
            <b-field label="Name">
              <span v-if="!isLoading">
                {{ detail.name }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Model">
              <span v-if="!isLoading">
                {{ detail.model }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Manufacturer">
              <span v-if="!isLoading">
                {{ detail.manufacturer }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <b-field label="Cost in Credits">
              <span v-if="!isLoading">
                {{ detail.cost_in_credits | toCurrency }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Length">
              <span v-if="!isLoading">
                {{ detail.length }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <b-field label="Max Atmosphering Speed">
              <span v-if="!isLoading">
                {{ detail.max_atmosphering_speed }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Crew">
              <span v-if="!isLoading">
                {{ detail.crew }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <b-field label="Passengers">
              <span v-if="!isLoading">
                {{ detail.passengers }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Cargo Capacity">
              <span v-if="!isLoading">
                {{ detail.cargo_capacity }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-6">
            <b-field label="Hyperdrive Rating">
              <span v-if="!isLoading">
                {{ detail.hyperdrive_rating }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="MGLT">
              <span v-if="!isLoading">
                {{ detail.MGLT }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Starship Class">
              <span v-if="!isLoading">
                {{ detail.starship_class }}
              </span>
              <b-skeleton v-else :animated="true"></b-skeleton>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Films">
              <span v-if="!isLoading">
                {{ filmTitle }}
              </span>
              <template v-else>
                <b-skeleton :animated="true"></b-skeleton>
              </template>
            </b-field>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Pilots">
              <span v-if="!isLoading">
                {{ pilotTitle }}
              </span>
              <template v-else>
                <b-skeleton :animated="true"></b-skeleton>
              </template>
            </b-field>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="columns is-multiline staship-detail-meta">
          <div class="column is-6">
            <b-field label="Created">
              <span v-if="!isLoading">
                {{ $date(detail.created).format("DD-MM-YYYY") }}
              </span>
              <template v-else>
                <b-skeleton :animated="true"></b-skeleton>
              </template>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Updated">
              <span v-if="!isLoading">
                {{ $date(detail.updated).format("DD-MM-YYYY") }}
              </span>
              <template v-else>
                <b-skeleton :animated="true"></b-skeleton>
              </template>
            </b-field>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { starshipModule, StarshipInterface, SET_STARSHIP } from "@/store/modules/starship";

import { filmModule, FilmInterface, SET_FILMS_APPEND } from "@/store/modules/film";

import { PeopleInterface, peopleModule, SET_PEOPLES_APPEND } from "@/store/modules/people";

@Component({
  filters: {
    toCurrency(value: number): string {
      if (isNaN(value)) {
        return "";
      }
      const formatter = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  }
})
export default class StarshipItem extends Vue {
  @Prop({ required: true }) selected!: StarshipInterface;

  isLoading = true;

  @starshipModule.State("detail") detail!: StarshipInterface;
  @starshipModule.Mutation(SET_STARSHIP) setDetail!: Function;
  @starshipModule.Action("getDetail") getDetail!: Function;

  @filmModule.State("list") films!: FilmInterface[];
  @filmModule.Mutation(SET_FILMS_APPEND) setFilms!: Function;
  @filmModule.Action("getDetail") getFilms!: Function;

  @peopleModule.State("list") peoples!: PeopleInterface[];
  @peopleModule.Mutation(SET_PEOPLES_APPEND) setPeoples!: Function;
  @peopleModule.Action("getDetail") getPeoples!: Function;

  get filmTitle() {
    return this.films.map(val => val.title).join(", ");
  }

  get pilotTitle() {
    if (this.detail.pilots.length > 0) {
      return this.peoples.map(val => val.name).join(", ");
    }
    return "-";
  }

  async mounted() {
    this.isLoading = true;
    await this.getDetail(this.selected);
    if (this.detail.films.length > 0) {
      for (let i = 0; i < this.detail.films.length; i++) {
        const cid = this.detail.films[i].split("/");
        await this.getFilms({
          id: cid[cid.length - 2],
          action: i === 0 ? "new" : "append"
        });
      }
    }

    if (this.detail.pilots.length > 0) {
      for (let i = 0; i < this.detail.pilots.length; i++) {
        const cid = this.detail.pilots[i].split("/");
        await this.getPeoples({
          id: cid[cid.length - 2],
          action: i === 0 ? "new" : "append"
        });
      }
    }
    this.isLoading = false;
  }
}
</script>

<style lang="scss" scoped>
.staship-detail-meta {
  width: 100%;
}
</style>
