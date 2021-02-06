import { Module } from "vuex";
import { RootState } from "@/types";
import { namespace } from "vuex-class";
import starshipsAPI from "@/api/starshipsAPI";

export const starshipModule = namespace("starship");

export const SET_STARSHIPS = "SET_STARSHIPS";
export const SET_STARSHIPS_APPEND = "SET_STARSHIPS_APPEND";
export const SET_STARSHIP = "SET_STARSHIP";

export interface StarshipInterface {
  passengers: string;
  pilots: Array<string>;
  name: string;
  hyperdrive_rating: string;
  url: string;
  cargo_capacity: string;
  edited: Date;
  consumables: string;
  max_atmosphering_speed: string;
  crew: string;
  length: string;
  MGLT: string;
  starship_class: string;
  created: Date;
  films: Array<string>;
  model: string;
  cost_in_credits: string;
  manufacturer: string;
}

interface StarshipState {
  list: StarshipInterface[];
  detail: StarshipInterface | Record<string, any>;
}

export default <Module<StarshipState, RootState>>{
  namespaced: true,
  state: {
    list: [],
    detail: {}
  },
  mutations: {
    [SET_STARSHIPS](state, data) {
      state.list = data;
    },
    [SET_STARSHIPS_APPEND](state, data) {
      state.list.push(...data);
    },

    [SET_STARSHIP](state, data) {
      state.detail = data;
    }
  },
  actions: {
    async getList({ commit }, params = {}) {
      try {
        const res: any = await starshipsAPI.all(params.data);
        if (params.action === "new") {
          commit(SET_STARSHIPS, res.data.results);
        } else {
          commit(SET_STARSHIPS_APPEND, res.data.results);
        }
        return res;
      } catch (e) {
        return e.response;
      }
    },
    async getDetail({ commit }, params = {}) {
      try {
        const res = await starshipsAPI.detail(params);
        commit(SET_STARSHIP, res.data);
        return res;
      } catch (e) {
        return e.response;
      }
    }
  }
};
