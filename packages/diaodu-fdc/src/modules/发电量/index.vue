<template>
  <section class="modal-container" flex="dir:left">
    <div
      class="item"
      flex
      flex-box="1"
      v-for="(item, index) in imgList"
      :key="index"
      :style="{
        backgroundImage: `url(${item.bimg})`
      }">
      <img :src="item.img" class="img" />
      <div class="right">
        <div class="top">当日发电量</div>
        <div>
          <span class="value">12345</span>
          <span class="unit">MW</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        imgList: [
          {
            img: require("../../img/ri.png"),
            bimg: require("../../img/day.png")
          },
          {
            img: require("../../img/top_1.png"),
            bimg: require("../../img/day.png")
          },
          {
            img: require("../../img/yue.png"),
            bimg: require("../../img/month.png")
          },
          {
            img: require("../../img/top_1.png"),
            bimg: require("../../img/month.png")
          },
          {
            img: require("../../img/year.png"),
            bimg: require("../../img/year_1.png")
          },
          {
            img: require("../../img/top_1.png"),
            bimg: require("../../img/year_1.png")
          }
        ]
      };
    }
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    font-family: 思源黑体 CN;
    color: #fff;
    .item {
      padding: 10px;
      width: 1px;
      height: 80px;
      margin-right: 60px;
      box-sizing: border-box;
      justify-content: space-between;
      border: 0.5px solid rgba(28, 69, 108, 0.5);
      background-color: rgba(10, 15, 20, 0.6);
      background-size: 40px 38px;
      background-position: right top;
      background-repeat: no-repeat;
      &:last-child {
        margin-right: 0;
      }
      .img {
        width: 60px;
        height: 54px;
      }
      .right {
        .top {
          font-size: 12px;
          margin-bottom: 10px;
        }
        .value {
          color: rgb(255, 255, 255);
          font-family: 思源黑体;
          font-size: 20px;
          font-weight: 700;
          text-shadow: 0px 0px 10px rgb(103, 190, 255);
        }
        .unit {
          color: rgb(143, 168, 191);
          font-family: 思源黑体 CN;
          font-size: 10px;
          font-weight: 400;
          margin-left: 20px;
        }
      }
    }
  }
</style>
