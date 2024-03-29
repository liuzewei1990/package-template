<template>
  <section class="number">
    <div class="list" flex>
      <span class="item" :class="item.type" v-for="item in numArr" :key="item.type">
        <span class="val">{{ item.value }}</span>
      </span>
    </div>
  </section>
</template>

<script>
  import { number } from "vue-types";
  import * as utils from "@package/diaodu-assets/utils/index.js";

  export default {
    components: {},
    props: {
      value: number().def(0)
    },
    computed: {
      numArr() {
        return String(utils.toFixed(this.value))
          .split("")
          .map((item) => {
            let type = item === "." ? "dian" : "int";
            return {
              value: item,
              type: type
            };
          });
      }
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .number {
    .list {
      .item {
        color: #fff;
        height: 30px;
      }
      .int {
        width: 20px;
        line-height: 30px;
        text-align: center;
        // border: 1px solid red;
        margin: 0 1px;
        background-image: url(../img/sd.png);
        background-size: 100% 100%;
      }
      .dian {
        width: 5px;
        display: flex;
        align-items: flex-end;
        position: relative;
        // bottom: 5px;
      }

      .val {
        background: linear-gradient(180deg, rgb(255, 255, 255), rgb(146, 249, 255));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-family: 阿里巴巴普惠体;
        font-size: 22px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 1px;
        text-align: center;
      }
    }
  }
</style>
