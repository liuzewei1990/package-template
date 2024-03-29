<template>
  <section class="modal-container" flex="dir:top">
    <div class="content" v-for="(item, index) in list" :key="index">
      <div class="bac" :style="{ backgroundImage: `url(${item.bag})` }"></div>
      <div class="text">{{ item.value }}</div>
      <div class="name">{{ item.name }}</div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            name: "CO2减排（吨）",
            value: "12345",
            bag: require("../../img/co2.png")
          },
          {
            name: "SO2减排（吨）",
            value: "12345",
            bag: require("../../img/so2.png")
          },
          {
            name: "节约标煤（吨）",
            value: "1234",
            bag: require("../../img/mei.png")
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    .bac {
      height: 77px;
      background-image: url("../../img/co2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .text {
      background: linear-gradient(180deg, rgb(255, 255, 255), rgb(147, 242, 255));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      font-family: DIN Alternate;
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      margin-top: -14px;
    }
    .name {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      box-sizing: border-box;
      color: rgb(255, 255, 255);
      font-family: 思源黑体 CN;
      font-size: 12px;
      font-weight: 400;
      background: linear-gradient(139.18deg, rgba(10, 31, 60, 0.2) 6.041%, rgba(0, 0, 0, 0) 63.487%),
        linear-gradient(90deg, rgb(25, 59, 109) -8.117%, rgb(14, 25, 42) 25.323%, rgb(15, 35, 64) 80.183%, rgb(18, 47, 89) 100%);
      border: 1px solid;
      border-image: linear-gradient(to bottom, rgb(25, 54, 96), rgb(27, 46, 73), rgb(121, 156, 208)) 1;
    }
  }
</style>
