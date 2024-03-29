<template>
  <section class="self-box-bj">
    <div class="container dev1" ref="container" flex="main:center cross:center">
      <!-- <modalCard class="modal-card"></modalCard> -->
      <div class="background-box dev1" ref="background-box" flex="main:center cross:center">
        <ami
          class="dev1"
          :links="['储能->电网', '电网->储能']"
          :mobileImg="aw"
          :mobileNum="10"
          :duration="4"
          :width="42.5"
          :height="228.5"
          :left="177"
          :top="156"
          path="M3.5 231.593 L 3.5 49.0744 C 3.5 34.6285 11.4852 21.3658 24.2523 14.6067 L 46 3.09326">
        </ami>
        <ami
          class="dev1"
          :links="['光伏->电网', '电网->光伏']"
          :mobileImg="aw"
          :mobileNum="10"
          :duration="4"
          :width="130"
          :height="138"
          :left="74"
          :top="135"
          path="M3 141L3 19C3 10.16 10.16 3 19 3L133 3">
        </ami>
        <ami
          class="dev1"
          :links="['余热->电网', '电网->余热']"
          :mobileImg="aw"
          :mobileNum="10"
          :duration="4"
          :width="112"
          :height="256"
          :left="296"
          :top="135"
          path="M112 259L112 19C112 10.16 104.83 3 96 3L0 3">
        </ami>
        <ami
          class="dev1 dev1111111111111111"
          :links="['储能->水泥厂', '水泥厂->储能']"
          :mobileImg="aw"
          :mobileNum="5"
          :duration="3"
          :width="94"
          :height="86"
          :left="189"
          :top="333"
          path="M-0.25 85.5L94 0">
        </ami>
        <ami
          class="dev1 dev1111111111111111"
          :links="['水泥厂->电网', '电网->水泥厂']"
          :mobileImg="aw"
          :mobileNum="5"
          :duration="3"
          :width="1"
          :height="100"
          :left="279"
          :top="156"
          path="M0.5 100L0.5 0">
        </ami>
        <ami
          class="dev1 dev1111111111111111"
          :links="['光伏->水泥厂', '水泥厂->光伏']"
          :mobileImg="aw"
          :mobileNum="5"
          :duration="3"
          :width="186"
          :height="10"
          :left="132"
          :top="309"
          path="M0 0L93 0">
        </ami>
        <ami
          class="dev1 dev1111111111111111"
          :links="['光伏->储能', '储能->光伏']"
          :mobileImg="aw"
          :mobileNum="5"
          :duration="3"
          :width="196"
          :height="110"
          :left="78"
          :top="342"
          path="M0 0L91.25 83.25">
        </ami>
        <ami
          class="dev1 dev1111111111111111"
          :links="['水泥厂->余热', '余热->水泥厂']"
          :mobileImg="aw"
          :mobileNum="5"
          :duration="3"
          :width="120"
          :height="110"
          :left="316"
          :top="291"
          path="M0 0L91.25 83.25">
        </ami>
        <ami
          class="dev1 dev1111111111111111"
          :links="['储能->余热', '余热->储能']"
          :mobileImg="aw"
          :mobileNum="5"
          :duration="3"
          :width="145"
          :height="11"
          :left="225"
          :top="429"
          path="M0 0L145 0">
        </ami>
        <div class="point-center dev1">
          <!-- 电网 -->
          <div class="point" flex="dir:top cross:center main:center" style="left: -5px; top: -152px">
            <dw></dw>
          </div>
          <!-- 光伏 -->
          <div class="point" flex="dir:top cross:center main:center" style="left: -172px; top: 49px">
            <gf></gf>
          </div>
          <!-- 水泥厂 -->
          <div class="point" flex="dir:top cross:center main:center" style="left: 39px; top: 53px">
            <sn></sn>
          </div>
          <!-- 储能 -->
          <div class="point" flex="dir:top cross:center main:center" style="left: -65px; top: 170px">
            <cn></cn>
          </div>
          <!-- 余热 -->
          <div class="point" flex="dir:top cross:center main:center" style="left: 157px; top: 170px">
            <yr></yr>
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
  import ami from "./ami.vue";
  import aw from "./aw.png";
  import dw from "./node-dw.vue";
  import gf from "./node-gf.vue";
  import sn from "./node-sn.vue";
  import cn from "./node-cn.vue";
  import yr from "./node-yr.vue";

  import map from "./map.js";

  export default {
    components: { ami, dw, gf, sn, cn, yr },
    inject: ["props"],
    data() {
      return {
        aw: aw,
        apiData: [
          {
            x: "-5px",
            y: "-152px",
            name: "电网",
            val: "91",
            unit: "MW"
          }
        ],

        links: [
          {
            from: "储能",
            to: "电网"
          },
          {
            from: "储能",
            to: "光伏"
          },
          {
            from: "余热",
            to: "电网"
          },
          {
            from: "储能",
            to: "余热"
          }
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
      this.getData();
      window.xxxxx = map;
    },
    methods: {
      resizeTo() {
        let minNum = Math.min(this.$refs["container"].clientWidth, this.$refs["container"].clientHeight + 0);
        this.$refs["background-box"].style.zoom = minNum / 484;
      },

      async getData() {
        // let params = new apis.PageVo();
        // params.andMap = {
        //   pageCode: this.props.apiForm.默认.pageCode,
        //   groupCode: this.props.apiForm.默认.groupCode
        // };

        // let data = await apis.commonRouteApi(params);
        // this.apiData = data;
        // this.initSocket(data);
        setTimeout(() => {
          this.links.forEach((obj) => {
            let link = `${obj.from}->${obj.to}`;
            map.findVmByDirection(link)();
          });
        }, 500);
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
      position: relative;
      // height: 100%;
      // width: 100%;
      width: 494px /1;
      height: 484px /1;
      background: url(../../img/map-line.png) no-repeat;
      // background: url(../images/energy-center.png) no-repeat;
      // background-size: calc(1812px / 2) calc(1210px / 2);
      background-size: 377px 311px;
      background-position: 55px 135px;

      .point-center {
        position: relative;
      }
      .point {
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 20px;
        // background: red;
        // background: #34f5ff;
        cursor: pointer;
        transition: all 0.2s;
        opacity: 0.9;

        &:hover {
          // transform: scale(1.05);
          opacity: 1;
        }
      }
    }
  }
</style>
