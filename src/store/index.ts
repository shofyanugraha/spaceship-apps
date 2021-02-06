import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";
import { RootState } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    drawer: false
  },
  mutations: {},
  actions: {},
  modules
});
