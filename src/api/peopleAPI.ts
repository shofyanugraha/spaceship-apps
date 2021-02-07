import axios from "axios";

export default {
  all(params = {}) {
    try {
      return axios.get("/people/", { params });
    } catch (e) {
      return e.response;
    }
  },
  detail(id: number | string) {
    try {
      return axios.get(`/people/${id}/`);
    } catch (e) {
      return e.response;
    }
  },
  schema() {
    try {
      return axios.get("/people/schema/");
    } catch (e) {
      return e.response;
    }
  }
};
