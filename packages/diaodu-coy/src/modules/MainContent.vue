<template>
  <section class="main-content" flex="dir:top">
    <CardContainer class="modal-box" flex-box="1" style="height: 1px"></CardContainer>
  </section>
</template>

<script>
  import CardContainer from "./卡片/index.vue";
  export default {
    components: { CardContainer },
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
    padding: 10px 10px;
    box-sizing: border-box;
    .modal-box {
      // margin-top: 10px;
    }
  }
</style>
