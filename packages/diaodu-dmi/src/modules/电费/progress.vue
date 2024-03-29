<template>
  <section class="">
    <div class="progress dev1" flex-box="0">
      <div class="item dev1">
        <div class="line-bar" flex>
          <div class="bar bar-1" style="width: 33.3%">
            <!-- <span class="val">30.12% </span>
            <span class="name">电网电费</span> -->
          </div>
          <div class="bar bar-2" style="width: 33.3%">
            <!-- <span class="val">29.18% </span>
            <span class="name">光伏电费</span> -->
          </div>
          <div class="bar bar-3" style="width: 33.3%">
            <!-- <span class="val">33.21% </span>
            <span class="name">储能电费</span> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .progress {
    // padding: 0 30px;
    .item {
      // margin: 20px 0;
      .line-bar {
        // margin-top: 15px;
      }

      .bar:first-child {
        border-radius: 10px 0 0 10px;
      }
      .bar:last-child {
        border-radius: 0 50px 50px 0;
        &::after {
          display: none;
        }
      }

      .bar {
        width: 25%;
        height: 8px;
        background: linear-gradient(270deg, rgb(46, 105, 240), rgba(46, 105, 240, 0.13) 100%);
        position: relative;
        // &::after {
        //   content: "";
        //   display: block;
        //   width: 1px;
        //   height: 220%;
        //   background: linear-gradient(0, rgba(255, 255, 255, 0), rgb(255, 255, 255) 100%);
        //   position: absolute;
        //   bottom: 0;
        //   right: 0;
        // }

        .val {
          color: rgb(255, 255, 255);
          font-family: 优设标题黑;
          font-size: 14px;
          line-height: 100%;
          position: absolute;
          right: 3px;
          top: calc(-100% - 5px);
          text-shadow: 0 0 10px rgb(103, 190, 255);
        }
        .name {
          color: rgb(255, 255, 255);
          font-family: 思源黑体;
          font-size: 10px;
          font-weight: 500;
          text-shadow: 0 0 10px rgb(103, 190, 255);
          position: absolute;
          right: 3px;
          bottom: calc(-100% - 5px);
        }
      }
      .bar-1 {
        background: linear-gradient(270deg, rgb(46, 105, 240), rgba(46, 105, 240, 0.13) 100%);
        background: rgb(65, 162, 255);
      }
      .bar-2 {
        background: linear-gradient(270deg, rgb(114, 244, 238), rgba(114, 244, 238, 0.27) 100%);
        background: rgb(82, 230, 201);
      }
      .bar-3 {
        background: linear-gradient(270deg, rgba(164, 241, 147, 0.9), rgba(164, 241, 147, 0.29) 100%);
        background: rgb(243, 216, 96);
      }
      .bar-4 {
        background: linear-gradient(270deg, rgb(243, 216, 96), rgba(243, 216, 96, 0.28) 100%);
      }
    }
  }
</style>
