<template>
  <section class="modal-container" flex="dir:top ">
    <mintitle :titleContent="{ name: '电费占比' }"></mintitle>

    <div class="list dev1" flex-box="0">
      <div class="item dev1">
        <div class="line-bar" flex>
          <div class="bar bar-1" style="width: 33.3%">
            <span class="val">30.12% </span>
            <span class="name">电网电费</span>
          </div>
          <div class="bar bar-2" style="width: 33.3%">
            <span class="val">29.18% </span>
            <span class="name">光伏电费</span>
          </div>
          <div class="bar bar-3" style="width: 33.3%">
            <span class="val">33.21% </span>
            <span class="name">储能电费</span>
          </div>
        </div>
      </div>
    </div>

    <div class="infos dev1" flex-box="1" style="height: 0" flex="dir:top box:mean">
      <div class="row dev1" flex="cross:center box:firs1t" v-for="item in 3" :key="item">
        <div class="icon">
          <img src="../../img/ico-1.png" alt="" />
        </div>
        <div class="col dev1" flex="cross:center" flex-box="1">
          <span class="name">电网电费</span>
          <span class="val">97.39</span>
          <span class="unit">万元</span>
        </div>
        <div class="col dev1" flex="cross:center" flex-box="1">
          <span class="name">电价</span>
          <span class="val">0.8989</span>
          <span class="unit">kWh</span>
        </div>
        <div class="col dev1" flex="cross:center main:right" style="width: 100px">
          <span class="name">同比</span>
          <span class="val">3.12%</span>
          <span class="small up"></span>
        </div>
        <div class="col dev1" flex="cross:center main:right" style="width: 100px">
          <span class="name">环比</span>
          <span class="val">3.12%</span>
          <span class="small down"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import mintitle from "../../components/mintitle.vue";
  export default {
    components: { mintitle },
    data() {
      return {};
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

    .list {
      padding: 0 30px;
      .item {
        margin: 20px 0;
        .line-bar {
          margin-top: 15px;
        }

        .bar:first-child {
          border-radius: 50px 0 0 50px;
        }
        .bar:last-child {
          border-radius: 0 50px 50px 0;
          &::after {
            display: none;
          }
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
            line-height: 100%;
            position: absolute;
            right: 3px;
            top: calc(-100% - 5px);
            text-shadow: 0 0 10px rgb(103, 190, 255);
          }
          .name {
            color: rgb(255, 255, 255);
            font-family: 思源黑体;
            font-size: 10px;
            font-weight: 500;
            text-shadow: 0 0 10px rgb(103, 190, 255);
            position: absolute;
            right: 3px;
            bottom: calc(-100% - 5px);
          }
        }
        .bar-1 {
          background: linear-gradient(270deg, rgb(46, 105, 240), rgba(46, 105, 240, 0.13) 100%);
          background: rgb(65, 162, 255);
        }
        .bar-2 {
          background: linear-gradient(270deg, rgb(114, 244, 238), rgba(114, 244, 238, 0.27) 100%);
          background: rgb(82, 230, 201);
        }
        .bar-3 {
          background: linear-gradient(270deg, rgba(164, 241, 147, 0.9), rgba(164, 241, 147, 0.29) 100%);
          background: rgb(243, 216, 96);
        }
        .bar-4 {
          background: linear-gradient(270deg, rgb(243, 216, 96), rgba(243, 216, 96, 0.28) 100%);
        }
      }
    }

    .infos {
      padding: 0 30px;
      .row {
        max-height: 30%;
        .icon {
          width: 36px;
          height: 27px;
          margin-right: 5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .col {
          margin: 0 5px;
        }
        .name {
          color: rgb(227, 245, 255);
          font-family: 思源黑体 CN;
          font-size: 10px;
          font-weight: 400;
        }
        .val {
          color: rgb(255, 255, 255);
          font-family: 优设标题黑;
          font-size: 16px;
          font-weight: 400;
          text-shadow: 0 0 10px rgb(103, 190, 255);
          margin: 0 5px;
        }
        .unit {
          color: rgb(143, 168, 191);
          font-family: 思源黑体 CN;
          font-size: 10px;
          font-weight: 400;
        }
        .small {
          width: 20px;
          height: 20px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .up {
          background-image: url(../../img/up.png);
        }
        .down {
          background-image: url(../../img/down.png);
        }
      }
    }
  }
</style>
