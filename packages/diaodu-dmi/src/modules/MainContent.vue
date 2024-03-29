<template>
  <section class="main-content" flex="dir:top">
    <div class="row top" flex>
      <div class="col" flex-box="1" style="width: 0">
        <ModalA></ModalA>
      </div>
      <div class="col" flex-box="2" style="width: 0">
        <ModalB></ModalB>
      </div>
      <div class="col" flex-box="3" style="width: 0">
        <ModalC></ModalC>
      </div>
    </div>

    <div class="row bot" flex="box:mean" flex-box="1" style="height: 1px">
      <div class="col">
        <ModalD></ModalD>
      </div>
      <div class="col">
        <ModalE></ModalE>
      </div>
    </div>
  </section>
</template>

<script>
  import ModalA from "./本月电费/index.vue";
  import ModalB from "./电费构成/index.vue";
  import ModalC from "./电费占比/index.vue";
  import ModalD from "./平均电价/index.vue";
  import ModalE from "./电费/index2.vue";

  export default {
    components: { ModalA, ModalB, ModalC, ModalD, ModalE },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .main-content {
    min-width: 1280px;
    min-height: 800px;
    position: absolute;
    inset: 0;
    background: #090913 url(../img/bj.png) no-repeat;
    // min-width: 1000px;
    background-position: center;
    background-size: 100% 100%;
    // min-height: 800px;
    overflow: hidden;
    padding: 10px 10px;
    box-sizing: border-box;
    .modal-box {
      // margin-top: 10px;
    }

    .row {
      margin: 4px 0;
      .col {
        margin: 0 4px;
      }
    }

    .top {
      height: 233px;
      // height: 250px;
    }

    .bot1 {
      display: flex;
      .col {
        flex: 1;
      }
    }
  }

  @font-face {
    font-family: 优设标题黑;
    src: url(../font/YouSheBiaoTiHei-2.ttf);
  }
</style>
