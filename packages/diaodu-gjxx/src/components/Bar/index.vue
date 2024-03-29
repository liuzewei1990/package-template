<template>
  <section class="bar-container dev1" :class="`bar-color${styleSheet}`" flex="dir:top cross:center">
    <div class="bar-box dev1">
      <div class="in dev1" :style="{ backgroundPositionY: `${position}px` }">
        <span class="value">{{ value }}</span>
      </div>
    </div>

    <div class="title" flex="cross:center main:center">{{ title }}</div>
  </section>
</template>

<script>
  import { number, string } from "vue-types";

  export default {
    components: {},
    props: {
      title: string().def("标题标题"),
      styleSheet: string().def("4"),
      max: number().def(100),
      value: number().def(50)
    },
    data() {
      return {};
    },
    computed: {
      position() {
        return 100 - (Math.min(this.max, this.value) / this.max) * 100;
      }
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .bar-container {
    .bar-box {
      position: relative;
      width: 110px;
      height: 145px;

      .in {
        position: absolute;
        left: 20px;
        top: 10px;
        width: 69px;
        height: 110px;
        background-position-x: center;
        border-radius: 0px 0px 10px 10px;
        text-align: center;
        line-height: 110px;
        transition: all 0.3s;
      }

      .value {
        font-size: 20px;
        font-weight: 700;
        background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(179, 196, 255)); /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
        -webkit-background-clip: text; /*将设置的背景颜色限制在文字中*/
        -webkit-text-fill-color: transparent; /*给文字设置成透明*/
      }
    }

    .title {
      width: 80%;
      min-width: 100px;
      color: #fff;
      border-radius: 100px;
      background: rgba(64, 74, 116, 0.59);
      border: 2px solid rgb(127, 154, 240);
    }
  }
  .bar-color1 {
    .bar-box {
      background: url(./path1.svg) no-repeat;
      .in {
        background: url(./path1-in.svg) no-repeat;
      }
    }
  }
  .bar-color2 {
    .bar-box {
      background: url(./path2.svg) no-repeat;
      .in {
        background: url(./path2-in.svg) no-repeat;
      }
    }
  }
  .bar-color3 {
    .bar-box {
      background: url(./path3.svg) no-repeat;
      .in {
        background: url(./path3-in.svg) no-repeat;
      }
    }
  }
  .bar-color4 {
    .bar-box {
      background: url(./path4.svg) no-repeat;
      .in {
        background: url(./path4-in.svg) no-repeat;
      }
    }
  }
</style>
