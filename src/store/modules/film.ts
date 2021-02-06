import { Module } from "vuex";
import { RootState } from "@/types";
import { namespace } from "vuex-class";
import filmsAPI from "@/api/filmsAPI";

export const filmModule = namespace("film");

export const SET_FILMS = "SET_FILMS";
export const SET_FILMS_APPEND = "SET_FILMS_APPEND";
export const SET_FILM = "SET_FILM";

export interface FilmInterface {
  starships: string;
  planets: Array<string>;
  title: string;
  producer: string;
  url: string;
  release_date: Date;
  edited: Date;
  vehicles: Array<string>;
  episode_id: number;
  director: string;
  opening_crawl: string;
  characters: Array<string>;
  species: Array<string>;
  created: Date;
}

interface FilmState {
  list: FilmInterface[];
  detail: FilmInterface | Record<string, any>;
}

export default <Module<FilmState, RootState>>{
  namespaced: true,
  state: {
    list: [],
    detail: {}
  },
  mutations: {
    [SET_FILMS](state, data) {
      state.list = [data];
    },
    [SET_FILMS_APPEND](state, data) {
      state.list.push(data);
    },

    [SET_FILM](state, data) {
      state.detail = data;
    }
  },
  actions: {
    async getDetail({ commit }, params = {}) {
      try {
        const res = await filmsAPI.detail(params.id);
        if (params.action === "new") {
          commit(SET_FILMS, res.data);
        } else {
          commit(SET_FILMS_APPEND, res.data);
        }
        return res;
      } catch (e) {
        return e.response;
      }
    }
  }
};
