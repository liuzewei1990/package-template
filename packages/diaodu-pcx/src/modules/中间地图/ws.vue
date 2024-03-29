<template>
  <section class="ws-text">
    <div class="card dev1">
      <div class="name" :class="type">{{ val.name }}</div>
      <div flex="cross:bottom">
        <span class="val">{{ val.val }}</span>
        <span class="unit">{{ val.unit }}</span>
      </div>
    </div>
  </section>
</template>

<script>
  import { object, string } from "vue-types";
  export default {
    components: {},
    props: {
      type: string().def("def"),
      val: object().def(() => ({
        name: "电网",
        val: 9,
        unit: "MW"
      }))
    },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .ws-text .card {
    margin: 0 auto;
    color: #fff;
    .name {
      text-wrap: nowrap;
      font-family: 思源黑体;
      font-size: 16px;
      font-weight: 600;
    }
    .def {
      background: linear-gradient(180deg, rgb(255, 255, 255), rgb(136, 199, 255));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .dw {
      background: linear-gradient(180deg, rgb(255, 255, 255), rgba(235, 192, 6, 0.64));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .val {
      color: rgb(255, 255, 255);
      font-family: 优设标题黑;
      font-size: 32px;
      text-shadow: 0 0 10px rgba(235, 192, 6, 0.64);
      line-height: 100%;
    }
    .unit {
      color: rgba(255, 255, 255, 0.48);
      font-family: 思源黑体;
      font-size: 10px;
      font-weight: 400;
    }
  }
</style>
