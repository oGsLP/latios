import Vue from "vue";
import App from "./App.vue";
import Latios from "./index";

Vue.config.productionTip = false;
Vue.use(Latios);

new Vue({
  render: h => h(App)
}).$mount("#app");
