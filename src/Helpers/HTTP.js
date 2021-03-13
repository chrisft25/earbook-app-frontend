import axios from "axios";

const instance = axios.create({
  baseURL: "https://countriesnow.space/api/v0.1/countries/",
  timeout: 5000,
});

const HTTP = {
  get: (params, setData, body = {}) => {
    instance
      .get(params, body)
      .then(function (response) {
        setData({ error: false, data: response.data.data });
      })
      .catch(function (error) {
        setData({ error: true, data: error });
      });
  },
  post: (params, setData, body = {}) => {
    instance
      .post(params, body)
      .then(function (response) {
        setData({ error: false, data: response.data.data });
      })
      .catch(function (error) {
        setData({ error: true, data: error });
      });
  },
};

export default HTTP;
