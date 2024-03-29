<template>
  <section class="modal-container">
    <toptitle :titleContent="titleContent"></toptitle>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";

  export default {
    components: { toptitle },
    data() {
      return {
        titleContent: {
          name: "电费",
          icon: require("../../img/icon-2.png")
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
  }
</style>
