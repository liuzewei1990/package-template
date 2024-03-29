<template>
  <section class="modal-container" flex="dir:top">
    <div class="head" flex-box="0">
      <toptitle :titleContent="titleContent" :bjColor="bjColor[0]"></toptitle>
    </div>
    <div class="content" flex-box="1" flex="dir:top">
      <div class="content-item" flex flex-box="1" v-for="(item, index) in list" :key="index">
        <div class="jin">
          <div class="value">{{ item.value }}</div>
          <div class="date">今</div>
        </div>
        <div class="icon" :style="{ backgroundImage: `url(${item.bag})` }">
          <span class="text">{{ item.name }}</span>
        </div>
        <div class="jin">
          <div class="value">{{ item.value }}</div>
          <div class="date">昨</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  export default {
    components: { toptitle },
    data() {
      this.bjColor = {
        0: ["rgba(8, 57, 87, 0)", "rgba(4, 100, 158,1)"],
        1: ["rgba(51, 119, 248, 0)", "rgba(51, 119, 248, 1)"],
        2: ["rgba(65, 223, 242, 0)", "rgba(65, 223, 242, 1)"],
        3: ["rgba(51, 119, 248, 0)", "rgba(51, 119, 248, 1)"]
      };
      return {
        titleContent: {
          name: "发电量(kWh)",
          icon: require("../../img/icon7.png")
        },
        list: [
          { name: "尖峰", value: 800, bag: require("../../img/jianfeng.png") },
          { name: "峰", value: 800, bag: require("../../img/feng.png") },
          { name: "谷", value: 800, bag: require("../../img/gu.png") }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    .content {
      border: 0.5px solid rgb(28, 69, 108);
      background: rgba(10, 15, 20, 0.6);
      .content-item {
        justify-content: space-around;
        align-items: center;
        .jin {
          width: 83px;
          height: 83px;
          background-image: url("../../img/bt.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          .value {
            color: rgb(255, 255, 255);
            font-family: DIN Alternate;
            font-size: 24px;
            font-weight: 700;
            text-shadow: 0px 0px 10px rgb(103, 190, 255);
          }
          .date {
            color: rgb(255, 255, 255);
            font-family: 思源黑体;
            font-size: 18px;
            font-weight: 700;
            opacity: 0.5;
            margin-top: 25px;
          }
        }
        .icon {
          width: 109px;
          height: 105px;
          background-image: url("../../img/jianfeng.png");
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          text-align: center;
          line-height: 200px;
          .text {
            color: rgb(255, 255, 255);
            font-family: 思源黑体 CN;
            font-size: 11px;
            font-weight: 400;
          }
        }
      }
    }
  }
</style>
