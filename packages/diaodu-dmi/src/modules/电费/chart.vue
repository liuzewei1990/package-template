<template>
  <section class="chart-box">
    <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
  </section>
</template>

<script>
  import option, { createLineSerie } from "./chart.option.js";

  export default {
    components: {},
    data() {
      return {
        option: option()
      };
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .chart-box {
    height: 20px;
  }
</style>
