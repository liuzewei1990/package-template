<template>
  <section class="chart-container dev1" flex="dir:top">
    <toptitle class="head" :titleContent="{ name: titles[type], icon: icons[type] }" :bjColor="bjColor[type]"></toptitle>
    <div flex-box="1" style="height: 1px; padding: 10px; border: 0.5px solid rgb(28, 69, 108)">
      <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
    </div>
  </section>
</template>

<script>
  import { string } from "vue-types";
  import toptitle from "../../components/toptitle.vue";
  import option, { createLineSerie, createBarSerie } from "./chart.option.js";
  export default {
    components: { toptitle },
    props: {
      type: string().def("0")
    },
    data() {
      this.bjColor = {
        0: ["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"],
        1: ["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"],
        2: ["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"],
        3: ["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"]
      };
      this.icons = {
        0: require("../../img/icon3.png"),
        1: require("../../img/icon4.png"),
        2: require("../../img/icon5.png"),
        3: require("../../img/icon6.png")
      };
      this.titles = {
        0: "功率曲线",
        1: "功率因数曲线",
        2: "三相电压曲线",
        3: "三相电流曲线"
      };
      this.colors = {
        0: ["rgba(67, 236, 255, 0.5)", "rgba(25, 29, 34, 0)", "rgb(67, 236, 255)"],
        1: ["rgba(67, 236, 255, 0.5)", "rgba(25, 29, 34, 0)", "rgb(67, 236, 255)"],
        2: ["rgb(67, 236, 255)", "rgb(77, 100, 242)", "rgb(152, 70, 241)"],
        3: ["rgb(67, 236, 255)", "rgb(77, 100, 242)", "rgb(152, 70, 241)"]
      };
      return {
        option: option(this.colors[this.type])
      };
    },
    created() {},
    mounted() {
      if (this.type == "0" || this.type == "1") {
        this.option.series = [
          createBarSerie({
            name: "功率",
            data: [10, 15, 25, 30, 40, 15, 20],
            color: this.colors[this.type]
          })
        ];
      } else {
        this.option.title = [];
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
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  .chart-container {
    height: 100%;
  }
</style>
