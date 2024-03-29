import Vue from "vue";
import component from "./component.vue";
new Vue({
  render: (h) => h(component)
}).$mount("#app");
