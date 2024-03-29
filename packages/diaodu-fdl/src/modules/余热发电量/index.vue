<template>
  <section class="modal-container" flex="dir:top">
    <div class="head" flex-box="0">
      <toptitle :titleContent="titleContent" :bjColor="bjColor[0]"></toptitle>
    </div>
    <div class="content" flex-box="1">
      <div class="content_item" v-for="(item, index) in list" :key="index">
        <div class="img" flex-box="0">
          <div class="bg" :style="{ backgroundImage: `url(${item.img})` }"></div>
        </div>
        <div class="value" flex-box="1" flex="dir:left">
          <span class="name" style="width: 40%">{{ item.name }}:</span>
          <span class="num" style="width: 40%">{{ item.value }}</span>
          <span class="unit" style="width: 20%">{{ item.unit || "" }}</span>
        </div>
      </div>
      <div class="date">
        <span class="name">投放日期:</span>
        <span class="i" style="margin-left: 8px">2023-10-23</span>
      </div>
      <div class="number">
        <div class="n">电表读数</div>
        <div class="number_i" flex>
          <div class="v" v-for="(item, index) in value" :key="index" flex>
            <div class="v_1">{{ item }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="content_item">
        <div class="img" flex-box="0">
          <div class="bg"></div>
        </div>
        <div class="value" flex-box="1">
          <span class="name" style="width: 60px">余热容量:</span>
          <span class="num" style="width: 80px">6</span>
        </div>
      </div>
      <div class="content_item">
        <div class="img" flex-box="0">
          <div class="bg"></div>
        </div>
        <div class="value" flex-box="1">
          <span class="name">余热容量:</span>
          <span class="num">1000</span>
          <span class="unit">MW</span>
        </div>
      </div> -->
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
          name: "余热发电量",
          icon: require("../../img/icon1.png")
        },
        value: "67894.00",
        list: [
          {
            img: require("../../img/left_1.png"),
            name: "AQC炉型号",
            value: "6",
            unit: ""
          },
          {
            img: require("../../img/left_2.png"),
            name: "AQC炉型号",
            value: "6",
            unit: "MW"
          },
          {
            img: require("../../img/left_3.png"),
            name: "SP炉型号",
            value: "1000",
            unit: ""
          },
          {
            img: require("../../img/left_3.png"),
            name: "SP炉型号",
            value: "1000",
            unit: ""
          },
          //   {
          //     img: require("../../img/left_3.png"),
          //     name: "SP炉型号",
          //     value: "1000",
          //     unit: ""
          //   },
          //   {
          //     img: require("../../img/left_3.png"),
          //     name: "汽轮机型号",
          //     value: "1000",
          //     unit: ""
          //   },
          {
            img: require("../../img/left_5.png"),
            name: "发电机型号",
            value: "6",
            unit: ""
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;

    .content {
      overflow-y: auto;
      overflow-x: hidden;
      padding: 10px 8px;
      border: 0.5px solid rgba(28, 69, 108, 0.5);
      background: rgba(10, 15, 20, 0.6);
      .content_item {
        width: 100%;
        height: 44px;
        background: rgb(11, 34, 72);
        border-radius: 6px;
        border: 0.5px solid rgb(47, 110, 221);
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        padding-left: 2px;
        .img {
          width: 38px;
          height: 38px;
          border-radius: 6px;
          padding: 4px;
          .bg {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
          }
        }
        .value {
          color: rgb(255, 255, 255);
          font-family: 思源黑体 CN;
          font-size: 12px;
          display: flex;
          align-items: center;

          margin-left: 6px;
          font-weight: 400;
          height: 100%;
          line-height: 44px;

          .num {
            color: rgb(255, 255, 255);
            font-family: 思源黑体;
            font-size: 24px;
            text-shadow: 0px 0px 10px rgb(103, 190, 255);
            font-weight: 700;
            text-align: center;
          }
          .unit {
            color: rgb(255, 255, 255);
            font-family: 思源黑体 CN;
            font-size: 11px;
            font-weight: 400;
            opacity: 0.5;
            text-align: center;
          }
        }
      }
      .date {
        width: 100%;
        height: 44px;
        background: linear-gradient(90deg, rgb(0, 62, 89) 2.25%, rgba(0, 62, 89, 0) 80.75%);
        padding: 0 8px;
        line-height: 44px;
        color: rgb(255, 255, 255);
        font-family: 思源黑体 CN;
        font-size: 12px;
        .name {
          opacity: 0.9;
        }
      }
      .number {
        margin-top: 10px;
        .n {
          color: rgb(255, 255, 255);
          font-family: 思源黑体 CN;
          font-size: 12px;
          opacity: 0.9;
          margin-left: 6px;
        }
        .number_i {
          margin-top: 4px;
          justify-content: space-around;
          .v {
            width: 20px;
            height: 32px;
            background: linear-gradient(180deg, rgba(3, 47, 84, 0), rgba(0, 193, 255, 0.5) 54.198%, rgba(18, 83, 115, 0) 100%);
            background-image: url("../../img/number.png");
            background-size: 100% 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .v_1 {
              background: linear-gradient(180deg, rgb(255, 255, 255), rgb(146, 249, 255));
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
              font-family: DINCond-Bold;
              font-size: 20px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
</style>
