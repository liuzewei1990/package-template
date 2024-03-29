<template>
  <div class="title-content dev1" flex="cross:center">
    <div class="1" flex-box="1" flex="cross:center">
      <span class="img"></span>
      <span class="title">{{ titleContent.name }}</span>
      <span class="unit">{{ titleContent.unit }}</span>
    </div>
    <span class="icon" @click="clickIcon">...</span>
  </div>
</template>

<script>
  import { object, string, array } from "vue-types";
  export default {
    props: {
      titleContent: object().def(() => ({}))
    },
    methods: {
      clickIcon() {
        this.$emit("showPopup");
      }
    }
  };
</script>

<style lang="less" scoped>
  .title-content {
    position: relative;
    width: 100%;
    color: #fff;
    height: 30px;

    .img {
      height: 11px;
      width: 3.5px;
      background: rgb(35, 196, 231);
      border-radius: 50px;
      margin: 0 9px;
      // border: 3px solid rgb(35, 196, 231);
      box-shadow: 0px 0px 15px 0px rgb(103, 190, 255);
    }
    .title {
      color: rgb(255, 255, 255);
      font-family: 思源黑体;
      font-size: 12px;
      font-weight: 500;
    }
    .unit {
      margin-left: 10px;
      font-size: 12px;
      font-weight: 400;
    }
    .icon {
      width: 14px;
      display: block;
      height: 14px;
      border-radius: 50%;
      background: rgb(7, 67, 105);
      line-height: 10px;
      font-size: 10px;
      text-align: center;
      margin-right: 20px;
    }
  }
</style>
