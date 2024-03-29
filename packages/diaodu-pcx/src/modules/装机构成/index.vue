<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="info dev1" flex-box="0" flex>
      <div class="item dev1" flex="dir:top cross:center">
        <div flex-box="1"></div>
        <span class="label">光伏装机容量(MW)</span>
        <span class="value">1458.12</span>
        <img class="icon" src="../../img/icon-0001.png" alt="" />
      </div>
      <div class="item dev1" flex="dir:top cross:center">
        <div flex-box="1"></div>
        <span class="label">光伏装机容量(MW)</span>
        <span class="value">1458.12</span>
        <img class="icon" src="../../img/icon-0002.png" alt="" />
      </div>
      <div class="item dev1" flex="dir:top cross:center">
        <div flex-box="1"></div>
        <span class="label">光伏装机容量(MW)</span>
        <span class="value">1458.12</span>
        <img class="icon" src="../../img/icon-0003.png" alt="" />
      </div>
    </div>
    <div class="total dev1" flex-box="3" style="height: 1px" flex="cross:center">
      <div class="pie dev1">
        <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
      </div>
      <div class="items dev1" flex-box="1">
        <div class="item item-1 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="1">市电</span>
          <span class="val" flex-box="1">7.0</span>
          <span class="val" flex-box="1">33%</span>
        </div>
        <div class="item item-2 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="1">光伏</span>
          <span class="val" flex-box="1">7.0</span>
          <span class="val" flex-box="1">33%</span>
        </div>
        <div class="item item-3 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="1">余热</span>
          <span class="val" flex-box="1">7.0</span>
          <span class="val" flex-box="1">33%</span>
        </div>
        <div class="item item-4 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="1">储能</span>
          <span class="val" flex-box="1">7.0</span>
          <span class="val" flex-box="1">33%</span>
        </div>
      </div>
    </div>
    <div class="list dev1" flex-box="0">
      <div class="item dev1" style="width: 70%">
        <div class="cop-title">尖峰电量</div>
        <div class="line-bar" flex>
          <div class="bar bar-1" style="width: 20%">
            <span class="val">20% </span>
          </div>
          <div class="bar bar-2" style="width: 20%">
            <span class="val">20% </span>
          </div>
          <div class="bar bar-3" style="width: 30%">
            <span class="val">30% </span>
          </div>
          <div class="bar bar-4" style="width: 30%">
            <span class="val">30% </span>
          </div>
        </div>
      </div>
      <div class="item dev1" style="width: 80%">
        <div class="cop-title">尖峰电量</div>
        <div class="line-bar" flex>
          <div class="bar bar-1" style="width: 20%">
            <span class="val">20% </span>
          </div>
          <div class="bar bar-2" style="width: 20%">
            <span class="val">20% </span>
          </div>
          <div class="bar bar-3" style="width: 30%">
            <span class="val">30% </span>
          </div>
          <div class="bar bar-4" style="width: 30%">
            <span class="val">30% </span>
          </div>
        </div>
      </div>
      <div class="item dev1" style="width: 100%">
        <div class="cop-title">尖峰电量</div>
        <div class="line-bar" flex>
          <div class="bar bar-1" style="width: 20%">
            <span class="val">20% </span>
          </div>
          <div class="bar bar-2" style="width: 20%">
            <span class="val">20% </span>
          </div>
          <div class="bar bar-3" style="width: 30%">
            <span class="val">30% </span>
          </div>
          <div class="bar bar-4" style="width: 30%">
            <span class="val">30% </span>
          </div>
        </div>
      </div>
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
          icon: require("../../img/icon-1.png"),
          name: "装机构成",
          unit: ""
        },
        option: option()
      };
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);
    padding: 0;

    .info {
      height: 120px;
      .item {
        width: 251px;
        height: 100%;
        background: url(../../img/icon-001.png) no-repeat;
        background-size: contain;
        background-position: center bottom;
        color: #fff;

        .label {
          color: rgb(255, 255, 255);
          font-family: 思源黑体;
          font-size: 10px;
          font-weight: 400;
        }
        .value {
          color: rgb(255, 255, 255);
          font-family: 优设标题黑;
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 10px;
        }
        .icon {
          width: 22px;
          height: 22px;
          margin-bottom: 10px;
        }
      }
    }

    .total {
      .pie {
        width: 150px;
        height: 150px;
      }
      .items {
        color: #fff;
        padding: 0 5%;
        .item {
          padding: 2px 0;
          .icon {
            width: 10px;
            height: 10px;
            background: rgb(46, 105, 240);
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 11px 0 rgb(74, 163, 248);
            margin-right: 10px;
          }
          .name {
            color: rgb(255, 255, 255);
            font-family: 思源黑体;
            font-size: 10px;
            font-weight: 700;
          }
          .val {
            color: rgb(255, 255, 255);
            font-family: 优设标题黑;
            font-size: 16px;
            font-weight: 700;
            text-shadow: 0px 0px 8px rgb(74, 163, 248);
          }
        }

        .item-1 {
          .icon {
            background: rgb(46, 105, 240);
            box-shadow: 0 0 11px 0 rgb(74, 163, 248);
          }
        }

        .item-2 {
          .icon {
            background: rgb(114, 244, 238);
            box-shadow: 0 0 11px 0 rgb(114, 244, 238);
          }
        }

        .item-3 {
          .icon {
            background: rgba(164, 241, 147, 0.9);
            box-shadow: 0 0 11px 0 rgba(164, 241, 147, 0.9);
          }
        }

        .item-4 {
          .icon {
            background: rgb(243, 216, 96);
            box-shadow: 0 0 11px 0 rgb(243, 216, 96);
          }
        }
      }
    }

    .list {
      padding: 0 8px;
      .item {
        margin: 10px 0;
        .line-bar {
          margin-top: 15px;
        }
        .bar {
          width: 25%;
          height: 12px;
          background: linear-gradient(270deg, rgb(46, 105, 240), rgba(46, 105, 240, 0.13) 100%);
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 1px;
            height: 220%;
            background: linear-gradient(0, rgba(255, 255, 255, 0), rgb(255, 255, 255) 100%);
            position: absolute;
            bottom: 0;
            right: 0;
          }

          .val {
            color: rgb(255, 255, 255);
            font-family: 优设标题黑;
            font-size: 14px;
            font-weight: 700;
            line-height: 100%;
            position: absolute;
            right: 3px;
            top: calc(-100% - 3px);
          }
        }
        .bar-1 {
          background: linear-gradient(270deg, rgb(46, 105, 240), rgba(46, 105, 240, 0.13) 100%);
        }
        .bar-2 {
          background: linear-gradient(270deg, rgb(114, 244, 238), rgba(114, 244, 238, 0.27) 100%);
        }
        .bar-3 {
          background: linear-gradient(270deg, rgba(164, 241, 147, 0.9), rgba(164, 241, 147, 0.29) 100%);
        }
        .bar-4 {
          background: linear-gradient(270deg, rgb(243, 216, 96), rgba(243, 216, 96, 0.28) 100%);
        }
      }
    }

    .cop-title {
      position: relative;
      color: rgb(255, 255, 255);
      font-family: 思源黑体;
      font-size: 12px;
      font-weight: 500;
      padding: 5px 0;
      padding-left: 30px;
      &::before {
        content: "";
        display: block;
        width: 16px;
        border: 2px solid rgb(35, 196, 231);
        border-radius: 10px;
        box-shadow: 0 0 5px 0 rgb(103, 190, 255);
        position: absolute;
        left: 0;
        top: 38%;
      }
    }
  }
</style>
