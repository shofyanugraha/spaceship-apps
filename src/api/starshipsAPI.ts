import axios from "axios";

export default {
  all(params: {}) {
    try {
      return axios.get("/starships/", { params });
    } catch (e) {
      return e.response;
    }
  },
  detail(id: number | string) {
    try {
      return axios.get(`/starships/${id}`);
    } catch (e) {
      return e.response;
    }
  },
  schema() {
    try {
      return axios.get("/starships/schema");
    } catch (e) {
      return e.response;
    }
  }
};
