<template>
  <section class="echarts-list-continer" flex="dir:top">
    <div class="list" flex flex-box="1">
      <div class="item dev1" flex-box="1" v-for="(item, index) in 4" :key="item">
        <chart :type="index"></chart>
      </div>
    </div>
  </section>
</template>

<script>
  import chart from "./chart.vue";

  export default {
    components: { chart },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .echarts-list-continer {
    width: 100%;
    height: 100%;
    background: rgba(10, 15, 20, 0.6);
    .list {
      width: 100%;
      height: 100%;

      .item {
        position: relative;
        width: 1px;
        height: 100%;
        margin-right: 10px;
      }
      .item:last-child {
        margin-right: 0px;
      }
    }
  }
</style>
