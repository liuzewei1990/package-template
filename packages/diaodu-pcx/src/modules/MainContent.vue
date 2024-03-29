<template>
  <section class="main-content" flex="dir:top">
    <!-- 头部标题 -->
    <div flex-box="0" class="header dev1">
      <div class="title"></div>
    </div>

    <!-- 组件 -->
    <div flex-box="1" class="comps" style="height: 1px" flex>
      <div flex-box="2" class="left dev1" flex="dir:top">
        <div class="a dev1" flex-box="3" style="padding: 10px; height: 1px">
          <ModelA></ModelA>
        </div>
        <div class="a dev1" flex-box="1" style="padding: 10px">
          <ModelB></ModelB>
        </div>
      </div>
      <div flex-box="3" class="center dev1" flex="dir:top" style="width: 1px">
        <div class="b dev1" flex-box="3" style="padding: 10px; height: 1px; position: relative">
          <ModelC></ModelC>
        </div>
        <div class="c dev1" flex-box="1" style="padding: 10px">
          <ModelD></ModelD>
        </div>
      </div>
      <div flex-box="2" class="right dev1" flex="dir:top">
        <div class="e dev1" flex-box="1" style="padding: 10px; height: 1px">
          <ModelE></ModelE>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ModelA from "./装机构成/index.vue";
  import ModelB from "./储能SOC/index.vue";
  // import ModelC from "./中间地图/index.vue";
  export const ModelC = () => {
    return import("./中间地图/index.vue");
  };
  import ModelD from "./电源-用电实时负荷/index.vue";
  import ModelE from "./负荷实时趋势/index.vue";

  export default {
    components: { ModelA, ModelB, ModelC, ModelD, ModelE },
    inject: ["work", "component", "props"],
    dataCacheKey: "",
    dataCache: [],
    dicts: [],
    on: {},
    props: {},
    created() {},
    mounted() {},
    data() {
      return {};
    },
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
    &::after111 {
      position: absolute;
      inset: 0;
      z-index: 1;
      // opacity: 0.3;
      border: 3px solid blue;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: url(../img/bj.png) no-repeat;
      background-size: 100% 100%;
    }
    .header {
      height: 60px;
      background-image: url(../img/background.png);
      background-repeat: no-repeat;
      background-size: 100% 96px;
      background-position: center top;
      margin-top: -7px;

      .title {
        width: 234px;
        height: 30px;
        margin: 16px auto 12px;
        background-image: url(../img/title.svg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        position: relative;
        z-index: 22;
      }
    }
    .comps {
      position: relative;
      z-index: 2;
      // padding-bottom: 20px;
      top: -20px;
      .left {
        width: 1px;
        min-width: 300px;
        max-width: 500px;
      }
      .right {
        width: 1px;
        min-width: 300px;
        max-width: 500px;
      }
    }
  }
</style>
./中间地图/中间地图.vue
