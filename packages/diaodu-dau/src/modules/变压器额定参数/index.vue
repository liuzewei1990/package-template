<template>
  <section class="modal-container" flex="dir:top">
    <div class="top" flex-box="0" flex="dir:top">
      <toptitle :titleContent="titleContent"></toptitle>
      <div class="detail" flex-box="1" style="height: 1px; justify-content: space-around" flex="dir:top">
        <div class="row" flex="cross:center">
          <span class="col label" flex-box="1">容量：</span>
          <span class="col val" flex-box="1">三相两卷有载调压</span>
        </div>
        <div class="row" flex="cross:center">
          <span class="col label" flex-box="1">型式：</span>
          <span class="col val" flex-box="1">63/630kV</span>
        </div>
        <div class="row" flex="cross:center">
          <span class="col label" flex-box="1">调压分接头：</span>
          <span class="col val" flex-box="1">110（+-）8*1.25%/10.5kV</span>
        </div>
        <div class="row" flex="cross:center">
          <span class="col label" flex-box="1">连接组别：</span>
          <span class="col val" flex-box="1">YN，d11</span>
        </div>
      </div>
    </div>
    <div class="bot" flex-box="1" style="height: 1px" flex>
      <div class="gaoya" flex-box="1" flex="dir:top">
        <toptitle
          :titleContent="{ icon: require('../../img/icon-5.png'), name: '高压侧' }"
          :bj-color="['rgba(65, 223, 242, 0)', 'rgba(65, 223, 242, 1)']">
        </toptitle>
        <div class="list dev1" flex-box="1" style="height: 1px">
          <ul>
            <li class="dev1" v-for="item in 20" :key="item" flex style="justify-content: space-between">
              <span class="">Ua</span>
              <span class="">V</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="diya" flex-box="1" flex="dir:top">
        <toptitle
          :titleContent="{ icon: require('../../img/icon-6.png'), name: '低压侧' }"
          :bj-color="['rgba(51, 119, 248, 0)', 'rgba(51, 119, 248, 1)']">
        </toptitle>
        <div class="list dev1" flex-box="1" style="height: 1px">
          <ul>
            <li class="dev1" v-for="item in 20" :key="item" flex style="justify-content: space-between">
              <span class="">Ua</span>
              <span class="">V</span>
            </li>
          </ul>
        </div>
      </div>
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
          icon: require("../../img/icon-4.png"),
          name: "变压器额定参数",
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
    .top {
      border: 0.5px solid rgba(28, 69, 108, 0.5);
      background: rgba(10, 15, 20, 0.5);
      height: 150px;
      margin-bottom: 10px;
      .detail {
        background: url(../../img/bs.png) no-repeat;
        background-size: 91px 74px;
        background-position: 10px center;
        padding: 10px 0;
        .row {
          color: #fff;
          .label {
            text-align: right;
            width: 1px;
            font-size: 10px;
            color: #999;
          }
          .val {
            width: 1px;
            font-size: 10px;
            font-weight: 700;
          }
        }
      }
    }
    .bot {
      .gaoya {
        width: 1px;
        border: 0.5px solid rgba(28, 69, 108, 0.5);
        background: rgba(10, 15, 20, 0.5);
        margin-right: 10px;
      }
      .diya {
        width: 1px;
        border: 0.5px solid rgba(28, 69, 108, 0.5);
        background: rgba(10, 15, 20, 0.5);
      }

      .list {
        color: #fff;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px 0;
        ul,
        li {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin: 0 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          padding: 5px 10px;
        }
      }
    }
  }
</style>
