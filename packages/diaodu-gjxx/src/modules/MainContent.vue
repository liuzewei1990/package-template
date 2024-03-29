<template>
  <section class="modal-container" flex="dir:top">
    <toptitle :titleContent="titleContent"></toptitle>
    <div class="chart-content" flex-box="1" style="height: 100px">
      <vxe-table class="my-table mytable-style" :border="false" ref="xTable" auto-resize height="auto" align="center" :data="tableData">
        <vxe-column field="id" title="预警类型"> </vxe-column>
        <vxe-column field="name" title="预警级别">
          <template #default="{ row }">
            <a-tag color="#108ee9">{{ row.name }} </a-tag>
          </template>
        </vxe-column>
        <vxe-column field="role" title="情报来源"> </vxe-column>
        <vxe-column field="sex" title="预警时间"> </vxe-column>
      </vxe-table>
    </div>
  </section>
</template>

<script>
  import toptitle from "../components/toptitle.vue";

  export default {
    components: { toptitle },
    data() {
      return {
        titleContent: {
          icon: require("../img/icon1.png"),
          name: "告警信息",
          unit: ""
        },
        tableData: [
          { id: "盗窃案件预警", name: "重大", role: "接警处系统", sex: "2024-3-26 15:43:20" },
          { id: "盗窃案件预警", name: "重大", role: "接警处系统", sex: "2024-3-26 15:43:20" },
          { id: "盗窃案件预警", name: "重大", role: "接警处系统", sex: "2024-3-26 15:43:20" },
          { id: "盗窃案件预警", name: "重大", role: "接警处系统", sex: "2024-3-26 15:43:20" },
          { id: "盗窃案件预警", name: "重大", role: "接警处系统", sex: "2024-3-26 15:43:20" }
        ]
      };
    },
    mounted() {
      // this.scorllTable();
    },
    methods: {
      scorllTable() {
        let isScroll = true;
        let div = document.querySelector(".vxe-table");
        console.log("div", div);
        if (div) {
          div.addEventListener("mouseenter", function () {
            isScroll = false;
          });
          div.addEventListener("mouseleave", function () {
            isScroll = true;
          });
          let t = document.querySelector(".vxe-table--body");

          if (t) {
            setInterval(() => {
              if (isScroll) {
                var data = this.tableData[0];
                setTimeout(() => {
                  this.tableData.unshift(data);
                }, 500);
                setTimeout(() => {
                  this.tableData.splice(this.tableData.length - 1, 1);
                }, 800);
              }
            }, 2500);
          }
        }
      }
    }
  };
</script>
<style></style>
<style lang="less" scoped>
  // @keyframes fadeIn {
  //   from {
  //     transform: translateY(50px);
  //   }
  //   to {
  //     transform: translateY(0px);
  //   }
  // }
  .modal-container {
    height: 100%;
    border: 0.5px solid rgba(28, 69, 108, 0.5);
    background: rgba(10, 15, 20, 0.5);
    /* 定义动画 */

    .my-table {
      /deep/ .vxe-table--border-line {
        display: none;
      }
      /deep/ .vxe-table--header-wrapper {
        color: #2cd7e5;
        font-size: 13px;
        height: 30px;
        display: flex !important;
        border-bottom: 1px solid #0bd5e5;
        background: linear-gradient(rgb(13, 27, 58), rgb(15, 54, 110));
      }
      /deep/.body--wrapper {
        display: flex !important;
      }
      /deep/ .vxe-table--body-wrapper {
        table {
          background: transparent !important;
          color: rgb(255, 255, 255);
          // &:hover {
          //   animation: fadeIn 1s infinite;
          // }
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
        font-size: 12px;
        background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
      }
    }
  }
</style>
