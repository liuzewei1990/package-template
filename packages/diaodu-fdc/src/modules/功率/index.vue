<template>
  <section class="modal-container" flex="dir:top">
    <div class="power-content">
      <div class="power-item" v-for="(item, index) in list" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="value" flex="dir:left">
          <div class="bac" flex-box="0" :style="{ backgroundImage: `url(${item.bag})` }"></div>
          <div class="text" flex-box="1">
            <span class="t">{{ item.value }}</span>
            <span class="u">{{ item.unit || "" }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            name: "当日最大功率",
            bag: require("../../img/right1.png"),
            unit: "kw",
            value: 123
          },
          {
            name: "平均功率",
            bag: require("../../img/right2.png"),
            unit: "",
            value: 123
          },
          {
            name: "吨熟料发电量(日)",
            bag: require("../../img/right3.png"),
            unit: "kw",
            value: "5%"
          },
          {
            name: "自用电率",
            bag: require("../../img/right4.png"),
            unit: "h",
            value: 7
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    .power-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .power-item {
        height: 94px;
        box-sizing: border-box;
        padding: 12px;
        background: linear-gradient(139.18deg, rgba(10, 31, 60, 0.2) 4.536%, rgba(0, 0, 0, 0) 64.072%),
          linear-gradient(90deg, rgb(25, 59, 109) -8.117%, rgb(14, 25, 42) 25.323%, rgb(15, 35, 64) 80.183%, rgb(18, 47, 89) 100%);
        position: relative;
        border: 1px solid;
        border-image: linear-gradient(to bottom, rgb(25, 54, 96), rgb(27, 46, 73), rgb(121, 156, 208)) 1;
        .name {
          color: rgb(255, 255, 255);
          font-family: 思源黑体 CN;
          font-size: 12px;
          font-weight: 400;
        }
        .value {
          margin-top: 10px;
          align-items: center;
          .bac {
            width: 47px;
            height: 30px;
            background-image: url("../../img/right1.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
          .text {
            // margin-left: 20px;
            text-align: center;
            .t {
              background: linear-gradient(180deg, rgb(255, 255, 255), rgb(147, 242, 255));
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-family: DIN Alternate;
              font-size: 26px;
              font-weight: 700;
              width: 100px;
            }
            .u {
              color: rgb(255, 255, 255);
              font-family: 思源黑体 CN;
              font-size: 11px;
              font-weight: 400;
              opacity: 0.7;
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
</style>
