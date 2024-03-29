<template>
  <section class="dev1" style="position: relative">
    <div class="boxa"></div>
    <ws :val="{ name: '余热', val: 9, unit: 'MW' }" style="position: absolute; left: -28px; top: 0px"></ws>
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
    background-image: url(../../img/yr.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>
