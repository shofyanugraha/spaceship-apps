<template>
  <div class="starship-detail">
    <div class="modal-card" style="max-width: 800px; min-width: 300px">
      <header class="modal-card-head">
        <h4 class="modal-card-title">Add Starship</h4>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>

      <section class="modal-card-body">
        <div class="columns is-multiline">
          <ValidationObserver ref="form" v-slot="{ handleSubmit }">
            <form autocomplete="off" @submit.prevent="handleSubmit(onSubmit)">
              <ValidationProvider name="Name" :rules="rules.name" v-slot="{ errors }" slim>
                <b-field label="Name">
                  <b-input v-model="form.name"></b-input>
                  <div v-if="errors.length">
                    <span v-for="(err, index) in errors" :key="index">{{ err }}</span>
                  </div>
                </b-field>
              </ValidationProvider>

              <b-button native-type="submit" class="btn-new" type="is-primary">Add</b-button>
            </form>
          </ValidationObserver>
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { starshipModule, SET_STARSHIPS_APPEND } from "@/store/modules/starship";

@Component
export default class StarshipAdd extends Vue {
  isLoading = true;

  @Prop() starship: any;

  @starshipModule.Mutation(SET_STARSHIPS_APPEND) addStarship!: Function;

  form: any = {
    name: "",
    passengers: "",
    pilots: [],
    hyperdrive_rating: "",
    url: "",
    cargo_capacity: "",
    edited: "",
    consumables: "",
    max_atmosphering_speed: "",
    crew: "",
    length: "",
    MGLT: "",
    starship_class: "",
    created: "",
    films: [],
    model: "",
    cost_in_credits: "",
    manufacturer: ""
  };

  rules: any = {
    name: "required"
  };

  onSubmit() {
    this.addStarship([this.form]);
    this.$emit("close", false);
  }
}
</script>

<style lang="scss" scoped>
.staship-detail-meta {
  width: 100%;
}
</style>
