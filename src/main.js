import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify";
import router from "./router";
import Vuex from "vuex";
import store from './store/index';

Vue.use(Vuex);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
