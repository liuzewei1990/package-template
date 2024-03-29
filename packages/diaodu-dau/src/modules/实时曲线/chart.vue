<template>
  <section class="chart-container dev1" flex="dir:top">
    <toptitle class="head" :titleContent="{ name: titles[type], icon: icons[type] }" :bjColor="bjColor[type]"></toptitle>
    <div flex-box="1" style="height: 1px">
      <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
    </div>
  </section>
</template>

<script>
  import { string } from "vue-types";
  import toptitle from "../../components/toptitle.vue";
  import option, { createLineSerie } from "./chart.option.js";
  export default {
    components: { toptitle },
    props: {
      type: string().def("0")
    },
    data() {
      this.bjColor = {
        0: ["rgba(65, 223, 242, 0)", "rgba(65, 223, 242, 1)"],
        1: ["rgba(51, 119, 248, 0)", "rgba(51, 119, 248, 1)"],
        2: ["rgba(65, 223, 242, 0)", "rgba(65, 223, 242, 1)"],
        3: ["rgba(51, 119, 248, 0)", "rgba(51, 119, 248, 1)"]
      };
      this.icons = {
        0: require("../../img/icon-1.png"),
        1: require("../../img/icon-1.png"),
        2: require("../../img/icon-2.png"),
        3: require("../../img/icon-2.png")
      };
      this.titles = {
        0: "高压侧电压实时曲线",
        1: "低压侧电压实时曲线",
        2: "高压侧电流实时曲线",
        3: "低压侧电流实时曲线"
      };
      this.colors = {
        0: ["rgb(191, 237, 253)", "rgb(74, 163, 248)", "rgb(67, 236, 255)"],
        1: ["rgb(191, 237, 253)", "rgb(74, 163, 248)", "rgb(67, 236, 255)"],
        2: ["rgb(67, 236, 255)", "rgb(77, 100, 242)", "rgb(152, 70, 241)"],
        3: ["rgb(67, 236, 255)", "rgb(77, 100, 242)", "rgb(152, 70, 241)"]
      };
      return {
        option: option(this.colors[this.type])
      };
    },
    created() {},
    mounted() {
      this.option.series = [
        createLineSerie({
          name: "ua",
          data: [2220, 1682, 2791, 3000, 6090, 3230, 2910]
        }),
        createLineSerie({
          name: "ub",
          data: [2220, 1682, 2791, 3000, 5090, 3230, 2910]
        }),
        createLineSerie({
          name: "uc",
          data: [2220, 1682, 2791, 3000, 4090, 3230, 2910]
        })
      ];
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .chart-container {
    height: 100%;
  }
</style>
