<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="chart-content" flex-box="1" style="height: 1px; margin-top: 10px">
      <vxe-table class="my-table mytable-style" :border="false" ref="xTable" height="100%" align="center" :data="tableData">
        <vxe-column width="50" field="id" title="日期"> </vxe-column>
        <vxe-column width="80" field="name" title="电费"> </vxe-column>
        <vxe-column width="80" field="role" title="市电电费"> </vxe-column>
        <vxe-column width="80" field="sex" title="光伏电费"> </vxe-column>
        <vxe-column width="80" field="age" title="储能电费"> </vxe-column>
        <vxe-column field="group4" title="储能电费">
          <template>
            <div class="dev1">
              <chart></chart>
            </div>
          </template>
          <template #header>
            <div>2223</div>
          </template>
        </vxe-column>
      </vxe-table>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";
  import myprogress from "./progress.vue";
  import chart from "./chart.vue";

  export default {
    components: { toptitle, myprogress, chart },
    data() {
      return {
        titleContent: {
          name: "电费",
          icon: require("../../img/icon-2.png")
        },
        tableData: [
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" },
          { id: "1-30", name: "3.87", role: "3.87", sex: "3.87", age: 28, address: "3.87" }
        ]
      };
    },
    created() {},
    mounted() {},
    methods: {}
  };
</script>

<style lang="less" scoped>
  .modal-container {
    height: 100%;
    // height: 292px;
    overflow: hidden;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);

    .my-table {
      /deep/ .vxe-table--border-line {
        display: none;
      }
      /deep/ .vxe-table--header-wrapper {
        background: transparent;
        color: rgb(255, 255, 255);
        font-size: 13px;
      }

      /deep/ .vxe-table--body-wrapper {
        table {
          background: transparent !important;
          color: rgb(255, 255, 255);
        }
      }

      // 去掉多余的边框
      /deep/ .vxe-table--header-border-line {
        border-bottom: 0px;
      }

      // 改变cell单元格的高度
      /deep/ .vxe-header--column:not(.col--ellipsis),
      /deep/ .vxe-body--column:not(.col--ellipsis) {
        padding: 3px 0 !important;
        font-size: 10px;
        background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
      }
    }
  }
</style>
