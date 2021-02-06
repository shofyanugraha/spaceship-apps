import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.proxy = {
  host: "localhost",
  port: 8080,
  protocol: "https"
};
