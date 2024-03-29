<template>
  <section class="main-content" flex="dir:top">
    <div class="modal-box dev1" flex-box="1" style="height: 1px">
      <ModelA></ModelA>
    </div>
    <div class="modal-box dev1" flex-box="1" style="height: 1px" flex>
      <div class="b" flex-box="1" style="width: 1px; margin-right: 20px">
        <ModelB></ModelB>
      </div>
      <div class="c" flex-box="1" style="width: 1px">
        <ModelC></ModelC>
      </div>
    </div>
    <div class="modal-box dev1" flex-box="0">
      <ModelD></ModelD>
    </div>
  </section>
</template>

<script>
  import ModelA from "./年月日负荷/index.vue";
  import ModelB from "./电量实时趋势/index.vue";
  import ModelC from "./电价趋势/index.vue";
  import ModelD from "./电量构成分析/index.vue";

  export default {
    components: { ModelA, ModelB, ModelC, ModelD },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  @import url(../../../diaodu-assets/less/index.less);

  .main-content {
    min-width: 1280px;
    min-height: 800px;
    position: absolute;
    inset: 0;
    background: #092032;
    background: #020204 url(../img/bj.png) no-repeat;
    // min-width: 1000px;
    background-position: center;
    background-size: 100% 100%;
    // min-height: 800px;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    .modal-box {
      margin-top: 10px;
    }
  }
</style>
