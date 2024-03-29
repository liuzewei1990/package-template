<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="chart-content" flex-box="1" style="height: 1px; margin-top: 10px">
      <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
    </div>
  </section>
</template>

<script>
  import toptitle from "../components/toptitle.vue";
  import option, { createLineSerie } from "./chart.option.js";

  export default {
    components: { toptitle },
    data() {
      this.colors = {
        0: ["rgb(191, 237, 253)", "rgb(74, 163, 248)", "rgb(67, 236, 255)"],
        1: ["rgb(191, 237, 253)", "rgb(74, 163, 248)", "rgb(67, 236, 255)"],
        2: ["rgb(67, 236, 255)", "rgb(77, 100, 242)", "rgb(152, 70, 241)", "rgb(74, 163, 248)"],
        3: ["rgb(67, 236, 255)", "rgb(77, 100, 242)", "rgb(152, 70, 241)"]
      };
      return {
        titleContent: {
          icon: require("../img/icon1.png"),
          name: "用电实时负荷",
          unit: ""
        },
        option: option(this.colors[2])
      };
    },
    created() {
      this.option.series = [
        createLineSerie({
          name: "市电",
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        }),
        createLineSerie({
          name: "光伏",
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        }),
        createLineSerie({
          name: "余热",
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        }),
        createLineSerie({
          name: "储能",
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        })
      ];
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);
  }
</style>
