import axios from "axios";

export default {
  all(params = {}) {
    try {
      return axios.get("/films/", { params });
    } catch (e) {
      return e.response;
    }
  },
  detail(id: number | string) {
    try {
      return axios.get(`/films/${id}/`);
    } catch (e) {
      return e.response;
    }
  },
  schema() {
    try {
      return axios.get("/films/schema/");
    } catch (e) {
      return e.response;
    }
  }
};
