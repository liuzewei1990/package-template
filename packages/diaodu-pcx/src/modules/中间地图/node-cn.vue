<template>
  <section class="dev1" style="position: relative">
    <div class="boxa"></div>
    <ws :val="{ name: '储能', val: 8, unit: 'MW' }" style="position: absolute; left: -32px; top: 48px"></ws>
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
    width: 133px;
    height: 115px;
    background-image: url(../../img/cn.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>
