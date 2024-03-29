<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="chart-content" flex-box="1" style="height: 1px; margin-top: 10px">
      <vxe-table class="my-table mytable-style" :border="false" ref="xTable" height="252px" align="center" :data="tableData">
        <vxe-colgroup field="name" title="电源来源"> </vxe-colgroup>
        <vxe-colgroup field="group1" title="尖峰时段">
          <vxe-column field="age" title="电量"></vxe-column>
          <vxe-column field="sex" title="占比"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup field="group2" title="峰时段">
          <vxe-column field="age" title="电量"></vxe-column>
          <vxe-column field="sex" title="占比"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup field="group3" title="谷时段">
          <vxe-column field="age" title="电量"></vxe-column>
          <vxe-column field="sex" title="占比"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup field="group4" title="合计">
          <vxe-column field="age" title="电量"></vxe-column>
          <vxe-column field="sex" title="占比"></vxe-column>
        </vxe-colgroup>
      </vxe-table>
    </div>
  </section>
</template>

<script>
  import toptitle from "../../components/toptitle.vue";

  export default {
    components: { toptitle },
    data() {
      return {
        titleContent: {
          icon: require("../../img/icon-3.png"),
          name: "电量构成分析",
          unit: ""
        },
        tableData: [
          { id: 10001, name: "市电", role: "Develop", sex: "Man", age: 28, address: "test abc" },
          { id: 10002, name: "光伏", role: "Test", sex: "Women", age: 22, address: "Guangzhou" },
          { id: 10003, name: "余热", role: "PM", sex: "Man", age: 32, address: "Shanghai" },
          { id: 10004, name: "储能", role: "Designer", sex: "Women", age: 23, address: "test abc" }
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
    // height: 100%;
    height: 292px;
    overflow: hidden;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);

    .my-table {
      /deep/ .vxe-table--border-line {
        display: none;
      }
      /deep/ .vxe-table--header-wrapper {
        background: transparent;
        color: rgba(255, 255, 255, 0.8);
        font-size: 13px;
      }

      /deep/ .vxe-table--body-wrapper {
        table {
          background: transparent !important;
          color: rgba(255, 255, 255, 0.8);
        }
      }

      // 去掉多余的边框
      /deep/ .vxe-table--header-border-line {
        border-bottom: 0px;
      }

      // 改变cell单元格的高度
      /deep/ .vxe-header--column:not(.col--ellipsis),
      /deep/ .vxe-body--column:not(.col--ellipsis) {
        padding: 10px 0 !important;
      }

      // 改变header列背景色
      /deep/ tr:first-child th:nth-child(1),
      /deep/ tr:first-child th:nth-child(3),
      /deep/ tr:first-child th:nth-child(5) {
        background-color: rgba(38, 94, 186, 0.2);
      }
      /deep/ tr:last-child th:nth-child(3),
      /deep/ tr:last-child th:nth-child(4),
      /deep/ tr:last-child th:nth-child(8),
      /deep/ tr:last-child th:nth-child(7) {
        background-color: rgba(38, 94, 186, 0.2);
      }

      // 改变body列背景色
      /deep/ tr td:nth-child(1),
      /deep/ tr td:nth-child(4),
      /deep/ tr td:nth-child(5),
      /deep/ tr td:nth-child(8),
      /deep/ tr td:nth-child(9) {
        background-color: rgba(38, 94, 186, 0.2);
      }
    }
  }
</style>
