<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="list dev1" flex-box="1" style="height: 1px" flex="dir:top">
      <chart v-for="(item, index) in 5" :key="index" :type="index" flex-box="1"></chart>
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
          icon: require("../../img/icon-4.png"),
          name: "负荷实时趋势",
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
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);

    .list {
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
</style>
