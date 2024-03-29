<template>
  <section class="modal-container" flex="dir:top">
    <div class="info dev1" flex-box="0" flex></div>
    <div class="list dev1" flex-box="1" flex>
      <div class="list-item dev" flex-box="1" flex="dir:top" v-for="item in 3" :key="item">
        <div class="head">
          <toptitle :titleContent="{ name: '年负荷', icon: icons[item] }"></toptitle>
        </div>
        <div flex-box="1" flex="cross:center">
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
      </div>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  import option, { createLineSerie } from "./chart.option.js";
  const icons = {
    1: require("../../img/icon-1.png"),
    2: require("../../img/icon-1.png"),
    3: require("../../img/icon-1.png")
  };

  export default {
    components: { toptitle },
    data() {
      return {
        icons: icons,
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

    .list {
      height: 1px;
    }
    .list-item {
      border: 0.5px solid rgba(28, 69, 108, 0.5);
      background: rgba(10, 15, 20, 0.5);
      margin-right: 22px;

      .head {
      }

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

    .list-item:last-child {
      margin-right: 0;
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
