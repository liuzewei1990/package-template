<template>
  <section class="modal-container" flex="dir:top">
    <div flex-box="0">
      <mintitle :titleContent="{ name: '本月电费' }"></mintitle>
      <number style="zoom: 1.2; margin: 10px 3px" :value="value"></number>
    </div>
    <div flex-box="2">
      <mintitle :titleContent="{ name: '平均电价' }"></mintitle>
      <number style="zoom: 1.2; margin: 10px 3px" :value="644.56"></number>
    </div>
  </section>
</template>

<script>
  import mintitle from "../../components/mintitle.vue";
  import number from "../../components/number.vue";

  export default {
    components: { mintitle, number },
    data() {
      return {
        value: 56644.56
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
