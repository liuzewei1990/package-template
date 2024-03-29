<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="chart-content" flex-box="1" style="height: 1px; margin-top: 10px">
      <ul class="list">
        <li v-for="item in 31" :key="item" class="item" :class="{ active: item == 1 }">
          <div class="" style="height: 100%" flex="cross:center main:center">
            <i class="icon" flex-box="0"></i>
            <span class="name" flex-box="1">2#断路器故障</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";

  export default {
    components: { toptitle },
    data() {
      return {
        titleContent: {
          icon: require("../../img/icon-3.png"),
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
  .modal-container {
    height: 100%;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);
    .chart-content {
      overflow-y: auto;
      overflow-x: hidden;
      ul,
      li {
        padding: 0;
        margin: 0;
      }
      .list {
        padding: 0 10px;
        .item {
          width: calc(50% - 10px);
          height: 43px;
          display: inline-block;
          margin: 5px;
          box-sizing: border-box;
          background: linear-gradient(139.18deg, rgba(10, 31, 60, 0.2) 5.753%, rgba(0, 0, 0, 0) 63.599%),
            linear-gradient(90deg, rgb(25, 59, 109) -8.117%, rgb(14, 25, 42) 25.323%, rgb(15, 35, 64) 80.183%, rgb(18, 47, 89) 100%);
          border-style: solid;
          border-width: 1.5px;
          border-image: linear-gradient(to bottom right, #193660ff, #1b2e49ff, #799cd0ff) 1;
          border-image-slice: 10;
          .icon {
            width: 25px;
            height: 25px;
            margin: 0 10px;
            background: url(../../img/dian-1.png) no-repeat;
            background-size: 100% 100%;
          }
          .name {
            color: rgb(255, 255, 255);
            font-family: 思源黑体 CN;
            font-size: 12px;
            font-weight: 400;
            // line-height: 13px;
          }
        }

        .active {
          background: linear-gradient(139.18deg, rgba(10, 31, 60, 0.2) 5.753%, rgba(0, 0, 0, 0) 63.599%),
            linear-gradient(90deg, rgb(109, 31, 25) -8.117%, rgba(109, 31, 25, 0.32) 25.323%, rgba(109, 31, 25, 0.27) 80.183%, rgb(109, 31, 25) 100%);

          border-image: linear-gradient(to bottom right, #632d2dff, #f55036ff) 1;
          .icon {
            background-image: url(../../img/dian-2.png);
          }
          .name {
            color: #f17b5d;
          }
        }
      }
    }
  }
</style>
