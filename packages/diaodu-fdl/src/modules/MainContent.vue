<template>
  <section class="main-content" flex="dir:top">
    <div class="dev1" flex-box="0">
      <ModelA></ModelA>
    </div>
    <div class="modal-box dev1" flex-box="2" style="height: 1px" flex>
      <div class="a" flex-box="1" style="width: 1px; max-width: 256px; border: 0">
        <ModelB></ModelB>
      </div>
      <div class="a" flex-box="1" style="width: 1px; min-width: 508px; position: relative; border: 0">
        <ModelC></ModelC>
      </div>
      <div class="a" flex-box="1" style="min-width: 310px; width: 1px; border: 0">
        <ModelD></ModelD>
      </div>
      <div class="a" flex-box="1" style="width: 1px; max-width: 154px; border: 0">
        <ModelE></ModelE>
      </div>
    </div>
    <div class="modal-box dev1" flex-box="1">
      <ModelF></ModelF>
    </div>
  </section>
</template>

<script>
  import ModelA from "./发电量/index.vue";
  import ModelB from "./余热发电量/index.vue";
  import ModelC from "./实时监控/index.vue";
  import ModelD from "./峰谷发电量/index.vue";
  import ModelE from "./功率/index.vue";
  import ModelF from "./底部图表/index.vue";
  export default {
    components: { ModelA, ModelB, ModelC, ModelD, ModelE, ModelF },
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
    .a {
      border: 1px solid red;
      // height: 300px;
      margin-right: 20px;
      &:last-child {
        margin: 0;
      }
    }
  }
</style>
