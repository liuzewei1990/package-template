<template>
  <work-container absolute min-height="400px">
    <main-content></main-content>
  </work-container>
</template>

<script>
  import { array, bool, number, string } from "vue-types";
  import MainContent from "./modules/MainContent.vue";
  export default {
    components: { MainContent },
    provide() {
      return {
        props: this.$props
      };
    },
    props: {}
  };
</script>

<style lang="less" scoped></style>
