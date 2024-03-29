<template>
  <section class="chart-container" flex>
    <!-- 概览 -->
    <div class="left dev1" flex-box="0" flex="cross:center">
      <div class="box dev1" flex>
        <img class="icon" src="../../img/icon_1.png" alt="" />
        <div flex-box="1">
          <span>
            <b class="val">0.8989</b>
            <small class="unit">元/kwh</small>
          </span>
          <span class="name">总平均电价</span>
        </div>
      </div>
    </div>
    <!-- 图表 -->
    <div class="right dev1" flex-box="5" style="width: 1px">
      <vue-chart class="" :option="option" :loading="false" :autoresize="true"></vue-chart>
    </div>
  </section>
</template>

<script>
  import { string } from "vue-types";
  import option, { createLineSerie } from "./chart.option.js";
  export default {
    components: {},
    props: {
      type: string().def("")
    },
    data() {
      return {
        option: option()
      };
    },
    created() {
      this.option.series = [
        createLineSerie(
          {
            data: [
              0.8989, 0.8989, 0.8989, 0.8989, 0.889, 0.8989, 0.8989, 0.8189, 0.8989, 0.8989, 0.7989, 0.8989, 0.8989, 0.8989, 0.7989, 0.8989, 0.889,
              0.8989, 0.8989, 0.8989, 0.8989, 0.8989, 0.8989, 0.8989, 0.7989, 0.8989, 0.8989, 0.8989, 0.8989, 0.8989, 0.8989, 0.7989, 0.8989, 0.8989,
              0.8989, 0.8989, 0.8989, 0.8989, 0.7989
            ]
          },
          this.type
        )
      ];
    },
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .chart-container {
    height: 100%;
    position: relative;
    box-sizing: border-box;
    background: linear-gradient(139.18deg, rgba(10, 31, 60, 0.2) 6.247%, rgba(0, 0, 0, 0) 63.407%),
      linear-gradient(90deg, rgba(25, 59, 109, 0.7) -8.117%, rgba(14, 25, 42, 0.7) 25.323%, rgba(15, 35, 64, 0.7) 80.183%, rgba(18, 47, 89, 0.7) 100%);
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(to right, rgba(25, 54, 96, 0.772), rgba(27, 46, 73, 0.744), rgba(121, 156, 208, 0.749)) 1;
    border-image-slice: 10;

    .left {
      width: 180px;
      .box {
        // width: 50%;
        color: rgb(227, 245, 255);
        margin-left: 16px;
        .icon {
          width: 47px;
          height: 35px;
          margin-right: 10px;
        }
        .name {
          color: rgb(143, 168, 191);
          font-family: 思源黑体 CN;
          font-size: 10px;
          margin-top: 1px;
          display: block;
          font-weight: 100;
        }
        .val {
          color: rgb(255, 255, 255);
          font-family: Arimo;
          font-weight: 700;
          font-size: 16px;
          line-height: 100%;
          text-shadow: 0 0 10px rgb(103, 190, 255);
        }
        .unit {
          color: rgb(143, 168, 191);
          font-family: 思源黑体 CN;
          margin-left: 5px;
          font-weight: 100;
        }
      }
    }

    .right {
      position: relative;
    }
  }
</style>
