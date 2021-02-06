import { Module } from "vuex";
import { RootState } from "@/types";
import { namespace } from "vuex-class";
import peopleAPI from "@/api/peopleAPI";

export const peopleModule = namespace("people");

export const SET_PEOPLES = "SET_PEOPLES";
export const SET_PEOPLES_APPEND = "SET_PEOPLES_APPEND";
export const SET_PEOPLE = "SET_PEOPLE";

export interface PeopleInterface {
  starships: string;
  planets: Array<string>;
  name: string;
  gender: string;
  url: string;
  skin_color: Date;
  edited: Date;
  vehicles: Array<string>;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  films: Array<string>;
  species: Array<string>;
  homeworld: string;
  birth_year: string;
  created: Date;
}

interface PeopleState {
  list: PeopleInterface[];
  detail: PeopleInterface | Record<string, any>;
}

export default <Module<PeopleState, RootState>>{
  namespaced: true,
  state: {
    list: [],
    detail: {}
  },
  mutations: {
    [SET_PEOPLES](state, data) {
      state.list = [data];
    },
    [SET_PEOPLES_APPEND](state, data) {
      state.list.push(data);
    },

    [SET_PEOPLE](state, data) {
      state.detail = data;
    }
  },
  actions: {
    async getDetail({ commit }, params = {}) {
      try {
        const res = await peopleAPI.detail(params.id);
        if (params.action === "new") {
          commit(SET_PEOPLES, res.data);
        } else {
          commit(SET_PEOPLES_APPEND, res.data);
        }
        return res;
      } catch (e) {
        return e.response;
      }
    }
  }
};
