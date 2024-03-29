<template>
  <section class="main-content" flex="dir:top">
    <div class="modal-box dev1" flex-box="5" style="height: 1px" flex>
      <div class="a" flex-box="1" style="width: 1px">
        <ModelA></ModelA>
      </div>
      <div class="b" flex-box="2" style="width: 1px; position: relative">
        <ModelB></ModelB>
      </div>
      <div class="c" flex-box="1" style="width: 1px">
        <ModelC></ModelC>
      </div>
    </div>
    <div class="modal-box dev1" flex-box="2">
      <ModelD></ModelD>
    </div>
  </section>
</template>

<script>
  import ModelA from "./变压器额定参数/index.vue";
  import ModelB from "./地图/index.vue";
  import ModelC from "./运行信号/index.vue";
  import ModelD from "./实时曲线/index.vue";

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
./运行信号/index.vue./变压器额定参数/index.vue
