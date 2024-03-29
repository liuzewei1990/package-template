<template>
  <section class="modal-container" flex="dir:top">
    <div class="head" flex-box="0">
      <toptitle :titleContent="titleContent" :bjColor="bjColor[0]"></toptitle>
    </div>
    <div flex-box="1" flex="dir:top">
      <div class="charts" flex-box="1" style="height: 1px; margin-bottom: 6px" flex="dir:left">
        <div class="pie dev1" flex-box="1" style="width: 1px">
          <vue-chart
            class="vue-chart"
            ref="botEcharts"
            :option="option"
            :loading="false"
            :autoresize="true"
            style="width: 100%; height: 100%"></vue-chart>
        </div>
        <div class="pie dev1" flex-box="1" style="width: 1px">
          <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
        </div>
      </div>
      <div class="bac" flex-box="1" style="min-height: 205px"></div>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  import option, { createLineSerie } from "./chart.option.js";
  export default {
    components: { toptitle },
    data() {
      this.bjColor = {
        0: ["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"],
        1: ["rgba(51, 119, 248, 0)", "rgba(51, 119, 248, 1)"],
        2: ["rgba(65, 223, 242, 0)", "rgba(65, 223, 242, 1)"],
        3: ["rgba(51, 119, 248, 0)", "rgba(51, 119, 248, 1)"]
      };
      return {
        option: option(),
        titleContent: {
          name: "实时监控",
          icon: require("../../img/icon2.png")
        }
      };
    }
    // created() {
    //   this.option.series = [createLineSerie({})];
    // }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    .charts {
      box-sizing: border-box;
      border: 0.5px solid rgba(28, 69, 108, 0.5);
      background: rgba(10, 15, 20, 0.6);
      // height: 200px;
      // .pie {
      //   width: 165px;
      //   height: 140px;
      // }
    }
    .bac {
      box-sizing: border-box;
      border: 0.5px solid rgb(28, 69, 108);
      background: rgba(10, 15, 20, 0.6);
      background-image: url("../../img/bac.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
