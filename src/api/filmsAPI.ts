import axios from "axios";

export default {
  all(params = {}) {
    return axios.get("/films", { params });
  },
  detail(id: number | string) {
    return axios.get(`/films/${id}`);
  },
  schema() {
    return axios.get("/films/schema");
  }
};
