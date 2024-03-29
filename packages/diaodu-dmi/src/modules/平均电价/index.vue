<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="list" flex-box="1" style="height: 0" flex="dir:top box:mean">
      <div class="item" v-for="item in 4" :key="item">
        <chart :type="item"></chart>
      </div>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  import chart from "./chart.vue";

  export default {
    components: { toptitle, chart },
    data() {
      return {
        titleContent: {
          name: "平均电价",
          icon: require("../../img/icon-1.png")
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

    .list {
      overflow-y: auto;
      overflow-x: hidden;
      padding: 6px 18px;
      .item {
        min-height: 104px;
        // max-height: 104px;
        margin: 6px 0;
      }
    }
  }
</style>
