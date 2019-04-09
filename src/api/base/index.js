import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;

const URL = () => {
  return process.env.VUE_APP_ROOT_API;
};

export default {
  URL,
  async get(path, options = {}) {
    try {
      const response = await axios.get(`${this.URL()}/${path}`, options);
      return response;
    } catch (error) {
      return new Error(error);
    }
  }
};
