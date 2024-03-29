<template>
  <section class="modal-container" flex="dir:top">
    <mintitle :titleContent="{ name: '电费构成' }"></mintitle>
    <div class="total dev1" flex-box="1" style="height: 1px" flex="cross:center">
      <div class="pie dev1">
        <vue-chart class="vue-chart dev1" ref="botEcharts" :option="option" :loading="false" :autoresize="true"></vue-chart>
      </div>
      <div class="items dev1" flex-box="1">
        <div class="item item-1 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="0">基本电费</span>
          <span flex-box="1" flex="cross:center">
            <span class="val">1234</span>
            <span class="unit">万元</span>
          </span>
          <span class="val" flex-box="0">33%</span>
        </div>
        <div class="item item-2 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="0">电度电费</span>
          <span flex-box="1" flex="cross:center">
            <span class="val">1234</span>
            <span class="unit">万元</span>
          </span>
          <span class="val" flex-box="0">33%</span>
        </div>
        <div class="item item-3 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="0">力调电费</span>
          <span flex-box="1" flex="cross:center">
            <span class="val">1234</span>
            <span class="unit">万元</span>
          </span>
          <span class="val" flex-box="0">33%</span>
        </div>
        <div class="item item-4 dev1" flex="cross:center">
          <i class="icon" flex-box="0"></i>
          <span class="name" flex-box="0">其他</span>
          <span flex-box="1" flex="cross:center">
            <span class="val">1234</span>
            <span class="unit">万元</span>
          </span>
          <span class="val" flex-box="0">33%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import mintitle from "../../components/mintitle.vue";
  import option, { createLineSerie } from "./chart.option.js";

  export default {
    components: { mintitle },
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
  .modal-container {
    height: 100%;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);
    .total {
      .pie {
        width: 160px;
        height: 160px;
      }
      .items {
        color: #fff;
        padding: 0 5%;
        .item {
          padding: 5px 0;
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
            min-width: 60px;
          }
          .val {
            color: rgb(255, 255, 255);
            font-family: 优设标题黑;
            font-size: 16px;
            // font-weight: 700;
            text-shadow: 0px 0px 8px rgb(74, 163, 248);
          }
          .unit {
            font-family: 思源黑体;
            font-size: 10px;
            margin-left: 5px;
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
  }
</style>
