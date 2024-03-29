<template>
  <section class="card-list-container">
    <div class="index-item dev1" v-for="item in 5" :key="item">
      <IndexItem></IndexItem>
    </div>
  </section>
</template>

<script>
  import IndexItem from "./index.item.vue";
  export default {
    components: { IndexItem },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .card-list-container {
    overflow-y: auto;
    .index-item {
      display: inline-block;
      width: calc(50% - 20px);
      height: 550px;
      margin: 10px;
    }
  }
</style>
