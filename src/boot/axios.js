import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  method: "post",
  baseURL: "https://pinterest-api.azurewebsites.net/api",
  header: {
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',
  }
  // method: "get",
  // // withCredentials: true,
  // // crossDomain: true,
  // // mode: 'no-cors',
  // baseURL: "https://api.pinterest.com/v5",
  // headers: {
  //   // 'Content-Type': 'application/json',
  //   // 'Access-Control-Allow-Origin': '*',
  //   Authorization:
  //     "Bearer pina_AEA5RIAWADA7QAIAGDAM6DNECFRO5BIBACGSOGADDZYKPJCYRWKRNJDEQ2LUPG2BZAIXRX4X5STJDZI4BIS2FKWRHC4C2TIA",
  // },
});

const tourastioApi = axios.create({
  method: "post",
  baseURL: "https://analysephotos.azurewebsites.net/api",
});
const tApi = axios.create({
  method: "post",
  baseURL: "https://travelshark.azurewebsites.net/api",
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, tApi, tourastioApi };
