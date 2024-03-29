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
      return {
        titleContent: {
          icon: require("../img/icon1.png"),
          name: "用电分析",
          unit: ""
        },
        option: option()
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
