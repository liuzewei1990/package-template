<template>
  <section class="card-item-container dev" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <!-- 顶部概览 -->
    <div class="header dev1" flex-box="0" flex>
      <div class="left dev1" flex-box="0">
        <div class="value">
          <span class="name">型号</span>
          <span class="val">9</span>
        </div>
      </div>
      <div class="right dev1" flex-box="1">
        <div class="item dev1">
          <div class="in-item" flex="cross:bottom">
            <span class="name" flex-box="1">额定功率</span>
            <span class="val">15</span>
            <span class="unit">MW</span>
          </div>
        </div>
        <div class="item dev1">
          <div flex="cross:bottom">
            <span class="name" flex-box="1">额定转速</span>
            <span class="val">3000</span>
            <span class="unit">r/min</span>
          </div>
        </div>
        <div class="item dev1">
          <div flex="cross:bottom">
            <span class="name" flex-box="1">进汽压力</span>
            <span class="val">4.9</span>
            <span class="unit">MPa</span>
          </div>
        </div>
        <div class="item dev1">
          <div flex="cross:bottom">
            <span class="name" flex-box="1">进汽温度</span>
            <span class="val">470</span>
            <span class="unit">℃</span>
          </div>
        </div>
        <div class="item dev1">
          <div flex="cross:bottom">
            <span class="name" flex-box="1">排汽压力</span>
            <span class="val">4.9</span>
            <span class="unit">MPa</span>
          </div>
        </div>
        <div class="item dev1">
          <div flex="cross:bottom">
            <span class="name" flex-box="1">排汽压力</span>
            <span class="val">4.9</span>
            <span class="unit">MPa</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部图表列表 -->
    <div class="echarts dev1" flex-box="1" flex="dir:top" style="height: 1px">
      <div class="chart-box" flex-box="1" style="height: 1px" v-for="item in 3" :key="item">
        <chart></chart>
      </div>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  import chart from "./chart.vue";
  export default {
    components: { toptitle, chart },
    data() {
      return {
        titleContent: {
          icon: require("../../img/icon-1.png"),
          name: "运行信号",
          unit: ""
        }
      };
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .card-item-container {
    height: 100%;
    height: 100%;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);

    .header {
      height: 150px;
      .left {
        width: 200px;
        background: url(../../img/icon-001.png) no-repeat;
        background-size: 120px 90px;
        background-position: center 15px;
        .value {
          color: #fff;
          text-align: center;
          margin-top: 105px;
        }
        .name {
          color: rgb(227, 245, 255);
          font-family: 思源黑体 CN;
          font-size: 12px;
          font-weight: 500;
        }
        .val {
          font-family: 优设标题黑;
          font-size: 30px;
          font-weight: 400;
          text-shadow: 0 0 10px rgb(103, 190, 255);
          line-height: 100%;
          margin: 0 3px;
          position: relative;
          top: 3px;
        }
      }

      .right {
        padding: 10px 0px;
        .item:nth-child(2n) {
          float: right;
        }
        .item {
          display: inline-block;
          width: 45%;
          max-width: 200px;
          margin: 6px 0;
          // padding: 0 5%;
          margin-right: 5%;

          .name {
            color: rgb(236, 236, 236);
            font-size: 12px;
            font-weight: 400;
          }
          .val {
            background: linear-gradient(180deg, rgb(255, 255, 255), rgb(146, 249, 255));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            font-family: 阿里巴巴普惠体;
            font-size: 28px;
            font-weight: 700;
            line-height: 100%;
            margin: 0 5px;
          }
          .unit {
            color: rgb(143, 168, 191);
            font-family: 思源黑体 CN;
            font-size: 12px;
            font-weight: 400;
          }
        }
      }
    }

    .echarts {
      padding: 8px;
      .chart-box {
        min-height: 110px;
        margin: 4px 0;
        position: relative;
      }
    }
  }
</style>
