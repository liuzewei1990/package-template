<template>
  <section class="chart dev1" flex="dir:top">
    <div class="chart-title" flex-box="0" flex="cross:center">
      <i class="icon"></i>
      <span>用电负荷</span>
    </div>
    <div class="chart-content" flex-box="1" style="height: 1px; margin-top: 10px">
      <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
    </div>
  </section>
</template>

<script>
  import { object, string } from "vue-types";
  import option, { createLineSerie } from "./chart.option.js";

  export default {
    components: {},
    props: {
      type: string().def("0")
    },
    data() {
      return {
        option: option()
      };
    },
    created() {
      this.option.series = [createLineSerie({}, this.type)];
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .chart {
    min-height: 150px;
    background: url(../../img/border.png) no-repeat;
    background-size: contain;
    background-position: center bottom;

    .chart-title {
      position: relative;
      padding: 20px 0px 5px 20px;
      box-sizing: border-box;
      .icon {
        display: block;
        width: 20px;
        height: 5px;
        border-radius: 10px;
        background-color: rgb(35, 196, 231);
        // border: 3px solid rgb(35, 196, 231);
        box-shadow: 0px 0px 15px 0px rgb(103, 190, 255);
        margin-right: 10px;
      }
      color: rgb(255, 255, 255);
      font-family: 思源黑体;
      font-size: 12px;
      font-weight: 500;
      line-height: 0px;
      letter-spacing: 0px;
      text-align: left;
    }
  }
</style>
