<template>
  <section class="self-box-bj dev1">
    <div class="container dev1" ref="container" flex="main:center cross:center">
      <!-- <modalCard class="modal-card"></modalCard> -->
      <div class="background-box" ref="background-box" flex="main:center cross:center">
        <div class="point-center">
          <!-- 压缩空气 -->
          <div class="point" :style="{ left: item.x, top: item.y }" flex="dir:top cross:center" v-for="(item, index) in apiData" :key="index">
            <div class="card">
              <div class="name">{{ item.name }}</div>
              <div flex="cross:bottom">
                <span class="val">{{ item.val }}</span>
                <span class="unit">{{ item.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <use-websocket :socket-params="socketParams" @message="socketData = $event" />
    </div>
  </section>
</template>

<script>
  import elementResizeDetectorMaker from "element-resize-detector";
  import { object, string } from "vue-types";

  export default {
    components: {},
    inject: ["props"],
    data() {
      return {
        apiData: [
          // {
          //   x: "40px",
          //   y: "-210px",
          //   name: "电网",
          //   val: "91",
          //   unit: "MW"
          // }
        ],
        socketParams: {},
        socketData: {}
      };
    },
    computed: {
      valMap() {
        return this.socketData?.valMap || {};
      }
    },
    mounted() {
      const erd = elementResizeDetectorMaker();
      erd.listenTo(this.$refs["container"], () => {
        this.resizeTo();
      });

      this.resizeTo();
      // this.getData();
    },
    methods: {
      resizeTo() {
        let minNum = Math.min(this.$refs["container"].clientWidth, this.$refs["container"].clientHeight + 50);
        this.$refs["background-box"].style.zoom = minNum / 577;
      },

      async getData() {
        let params = new apis.PageVo();
        params.andMap = {
          pageCode: this.props.apiForm.默认.pageCode,
          groupCode: this.props.apiForm.默认.groupCode
        };

        let data = await apis.commonRouteApi(params);
        this.apiData = data;
        // this.initSocket(data);
      },

      initSocket(data) {
        // 请求websocket
        this.socketParams = {
          type: "hs",
          field: "real_point_data",
          param: "",
          times: 0,
          interval: 0,
          size: 0,
          page: 0,
          keys: socketKeys,
          inited: false,
          keysRedis: [""],
          keysRedisMap: {}
        };
      }
    }
  };
</script>

<style lang="less" scoped>
  .self-box-bj {
    position: absolute;
    inset: 10px;

    // border: 0.5px solid rgba(28, 69, 108, 0.5);
    // background: rgba(10, 15, 20, 0.3);
    padding: 8px;
  }
  .container {
    height: 100%;

    .background-box {
      // height: 100%;
      // width: 100%;
      width: 620px /1;
      height: 577px /1;
      background: url(../../img/map1.svg) no-repeat;
      // background: url(../images/energy-center.png) no-repeat;
      // background-size: calc(1812px / 2) calc(1210px / 2);
      // background-size: contain;
      // background-position: center;

      .point-center {
        position: relative;
      }
      .point {
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 20px;
        background: red;
        background: #34f5ff;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.2);
        }
      }

      .point .card {
        margin: 0 auto;
        color: #fff;
        .name {
          background: linear-gradient(180deg, rgb(255, 255, 255), rgba(235, 192, 6, 0.64));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-family: 思源黑体;
          font-size: 16px;
          font-weight: 600;
        }
        .val {
          color: rgb(255, 255, 255);
          font-family: 优设标题黑;
          font-size: 32px;
          font-weight: 600;
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
    }
  }
</style>
