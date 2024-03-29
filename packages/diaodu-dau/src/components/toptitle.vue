<template>
  <div class="title-content dev1" flex="cross:center" :style="{ backgroundImage: `linear-gradient(-90deg, ${bjColor[0]} 0%, ${bjColor[1]}` }">
    <div class="1" flex-box="1" flex="cross:center">
      <img :src="titleContent.icon" class="img" />
      <span class="title">{{ titleContent.name }}</span>
      <span class="unit">{{ titleContent.unit }}</span>
    </div>
    <!-- <span class="icon" @click="clickIcon">...</span> -->
  </div>
</template>

<script>
  import { object, string, array } from "vue-types";
  export default {
    props: {
      bjColor: array().def(["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"]),
      titleContent: object().def(() => ({}))
    },
    methods: {
      clickIcon() {
        this.$emit("showPopup");
      }
    }
  };
</script>

<style lang="less">
  .title-content {
    position: relative;
    width: 100%;
    color: #fff;
    font-weight: 700;
    height: 30px;
    background-image: linear-gradient(-90deg, rgba(8, 57, 87, 0) 0%, rgb(4, 100, 158) 100%);
    &::after {
      content: "";
      display: block;
      height: 100%;
      width: 300px;
      background-image: url(../img/title-bj.svg);
      background-repeat: no-repeat;
      background-position: center right;
      position: absolute;
      right: 0;
      top: 0;
    }
    .img {
      height: 30px;
      width: 30px;
    }
    .title {
      text-shadow: 2px 2px 5px #333;
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
