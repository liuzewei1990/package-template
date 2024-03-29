<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="chart-content" flex-box="1" style="height: 1px; margin-top: 10px">
      <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  import option, { createLineSerie } from "./chart.option.js";

  export default {
    components: { toptitle },
    data() {
      return {
        titleContent: {
          icon: require("../../img/icon-3.png"),
          name: "电源-用电实时负荷",
          unit: ""
        },
        option: option()
      };
    },
    created() {
      this.option.series = [
        createLineSerie(
          {
            data: [120, 132, 101, 134, 90, 200, 110]
          },
          0
        ),
        createLineSerie(
          {
            data: [120 * 0.5, 132 * 0.5, 101 * 0.5, 134 * 0.5, 90 * 0.5, 200 * 0.5, 110 * 0.5]
          },
          1
        )
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
