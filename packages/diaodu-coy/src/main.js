import Vue from "vue";
import component from "./component.vue";

// import components from "../../../build/index.dev.js";
// Vue.use(components);
import componentGroupList from "../../../build/componentGroupList.js";
new Vue({
  render: (h) =>
    h("work-editor", {
      props: { componentGroupList: componentGroupList }
    })
}).$mount("#app");
