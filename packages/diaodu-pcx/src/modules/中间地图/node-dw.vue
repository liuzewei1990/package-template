<template>
  <section class="dev1" style="position: relative">
    <div class="boxa"></div>
    <ws type="dw" :val="{ name: '电网', val: 8, unit: 'MW' }" style="position: absolute; left: 110px; top: 23px"></ws>
  </section>
</template>

<script>
  import ws from "./ws.vue";
  export default {
    components: { ws },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .boxa {
    width: 146px;
    height: 180px;
    background-image: url(../../img/dw.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>
