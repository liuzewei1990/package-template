<template>
  <div class="price_content" style="height: 100%">
    <div flex-box="0">
      <toptitle :titleContent="titleContent" @showPopup="showPopup"></toptitle>
    </div>
    <div class="line-container" style="height: 100%">
      <div class="img"></div>
      <div class="price_item">
        <!-- <div class="item" v-for="(item, index) in priceData.price || '0.00'" :key="index">{{ item }}</div> -->
        <div class="item">1</div>
        <div class="item">1</div>
        <div class="item">.</div>
        <div class="item">1</div>
        <div class="item">1</div>
      </div>
    </div>
    <!-- <vxe-modal v-model="utilizePopup" title=" " show-zoom width="60vw" height="70vh" :showHeader="false">
      <div style="height: 100%" flex="dir:top">
        <toptitle :titleContent="titleContent_p" @closePopup="utilizePopup = false"></toptitle>
        <div flex-box="0" class="progress_c">
          <work-range-date
            :isFormat="true"
            :dateType.sync="formData.dateType"
            :dateValue.sync="formData.dateValue"
            style="margin-bottom: 20px"></work-range-date>
        </div>
        <div flex-box="1" class="echarts-container" style="height: 1px; margin-top: 0px; padding: 0 20px">
          <work-empty v-if="isEmpty"></work-empty>
          <vue-chart class="vue-chart" ref="botEcharts" :option="option" :loading="loading" :autoresize="true" v-else></vue-chart>
        </div>
      </div>
    </vxe-modal> -->
  </div>
</template>

<script>
  import toptitle from "../components/toptitle.vue";
  // import option, { createBarSerie, createLineSerie } from "./utilizeLine.js";
  export default {
    inject: ["props", "component"],
    components: { toptitle },
    data() {
      return {
        loading: false,
        isEmpty: false,
        // option: option(),
        color: ["rgb(255, 186, 55)", "rgb(255, 186, 55)"],
        priceData: {},
        formData: {
          dateType: "month",
          dateValue: [moment().format("YYYY-MM-DD"), moment().format("YYYY-MM-DD")]
        },
        titleContent: {
          icon: require("../img/icon1.png"),
          name: "电费",
          unit: "(元/kWh)",
          isDetail: false,
          detailName: ""
        },
        utilizePopup: false,
        titleContent_p: {
          icon: require("../img/icon1.png"),
          name: "工厂电价详情",
          unit: "",
          isPopup: true
          // detailName: "power"
        }
      };
    }
    // mounted() {
    //   this.getRouteData(this.formData.dateValue[0], "month_day");
    //   this.getPriceRouteData();
    // },
    // watch: {
    //   formData: {
    //     handler(val) {
    //       let dataType = "";
    //       if (val.dateType == "date") {
    //         dataType = "day_hour";
    //       } else if (val.dateType == "month") {
    //         dataType = "month_day";
    //       } else {
    //         dataType = "year_month";
    //       }
    //       this.getRouteData(this.formData.dateValue[0], dataType);
    //     },
    //     deep: true
    //   }
    // },
    // methods: {
    //   showPopup(name) {
    //     console.log(name);
    //     if (name == "utilize") {
    //       this.utilizePopup = true;
    //     }
    //   },
    //   async getRouteData(startDate, dataType) {
    //     try {
    //       const params = new apis.PageVo();
    //       params.andMap = {
    //         pageCode: this.props.apiForm.默认.pageCode,
    //         groupCode: this.props.apiForm.默认.groupCode
    //       };
    //       let { fields, groupBy } = await apis.commonRouteApi(params);
    //       this.getPriceDetailData(startDate, dataType, fields, groupBy);
    //     } catch (error) {
    //       this.$message.error("获取数据失败");
    //       throw error;
    //     }
    //   },
    //   async getPriceRouteData() {
    //     try {
    //       const params = new apis.PageVo();
    //       params.andMap = {
    //         pageCode: this.props.apiForm.电价.pageCode,
    //         groupCode: this.props.apiForm.电价.groupCode
    //       };
    //       let { fields, groupBy } = await apis.commonRouteApi(params);
    //       this.getPriceData(moment().startOf("year").format("YYYY-MM-DD"), moment().format("YYYY-MM-DD"), fields, groupBy);
    //     } catch (error) {
    //       this.$message.error("获取数据失败");
    //       throw error;
    //     }
    //   },
    //   async getPriceData(startDate, endDate, arr, groupBy) {
    //     try {
    //       const params = {};
    //       params.quotaList = JSON.stringify(arr);
    //       params.groupBy = groupBy;
    //       params.startDate = startDate;
    //       params.endDate = endDate;
    //       // params.startDate = "2023-12-01";
    //       // params.endDate = "2023-12-31";
    //       params.dataType = "day";
    //       let data = await window.h5plus.service.work.post(config.baseApiURL, "/dataQuotaHours/getQuotaData", params);
    //       this.priceData = data[0] || {};
    //     } catch (error) {
    //       this.$message.error("获取数据失败");
    //       throw error;
    //     }
    //   },
    //   async getPriceDetailData(startDate, dateType, arr, groupBy) {
    //     try {
    //       const params = {};
    //       params.quotaList = JSON.stringify(arr);
    //       params.groupBy = groupBy;
    //       params.startDate = startDate;
    //       // params.endDate = endDate;
    //       // params.startDate = "2023-12-01";
    //       // params.endDate = "2023-12-31";
    //       params.dataType = dateType;
    //       let data = await window.h5plus.service.work.post(config.baseApiURL, "/dataQuotaHours/getQuotaData", params);
    //       if (data.length) {
    //         this.isEmpty = false;
    //       } else {
    //         this.isEmpty = true;
    //       }
    //       let legend = data.map((item) => {
    //         return item.corp_name;
    //       });
    //       let corpList = Array.from(new Set(legend));
    //       let tiemList = data.map((item) => {
    //         return item.val_tm;
    //       });
    //       this.option.legend.data = corpList;
    //       this.option.xAxis.data = Array.from(new Set(tiemList));
    //       const splitByCorpCode = data.reduce((result, item) => {
    //         (result[item.corp_name] = result[item.corp_name] || []).push(item.price);
    //         return result;
    //       }, {});
    //       let series = [];
    //       corpList.forEach((item, index) => {
    //         series.push({
    //           name: item,
    //           type: "line",
    //           color: this.color[index],
    //           data: splitByCorpCode[item]
    //         });
    //       });
    //       this.option.series = series;
    //     } catch (error) {
    //       this.$message.error("获取数据失败");
    //       throw error;
    //     }
    //   }
    // }
  };
</script>

<style lang="less" scoped>
  /deep/.vxe-modal--content {
    padding: 10px;
    background-color: #0a1928;
  }
  /deep/.vxe-modal--box {
    border: 1px solid rgb(28, 69, 108);
  }
  /deep/.ant-progress-text {
    color: #fff;
  }
  /deep/ .ant-progress-circle-trail {
    stroke: rgb(12, 54, 82) !important;
  }
  /deep/.ant-select-selection {
    display: block;
    box-sizing: border-box;
    background-color: rgba(10, 26, 52, 0.6);
    border: 0.5px solid rgb(45, 205, 255);
    border-top-width: 1.02px;
    border-radius: 6px;
    color: rgb(45, 205, 255);
    outline: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  /deep/ .common-date-query {
    background-color: rgba(10, 26, 52, 0.6);
  }
  /deep/.ant-calendar-picker-input.ant-input-sm {
    background-color: rgba(10, 26, 52, 0.6);
    border-radius: 4px;
    color: rgb(45, 205, 255);
    border: 0.5px solid rgb(45, 205, 255);
  }
  /deep/.ant-select-arrow .ant-select-arrow-icon {
    color: rgb(45, 205, 255);
    font-size: 10px;
    line-height: 15px;
  }
  /deep/.ant-calendar-range-picker-separator {
    color: rgb(45, 205, 255);
  }
  /deep/.ant-calendar-picker-icon {
    color: rgb(45, 205, 255) !important;
  }
  .progress_c {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 30px 0px 20px;
  }
  .price_content {
    flex: 1;
    min-width: 264px;
    box-sizing: border-box;
    border: 1px solid rgb(28, 69, 108);
    .line-container {
      display: flex;
      align-items: center;
      .img {
        width: 123px;
        height: 84px;
        background-image: url("../img/dian.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .price_item {
        display: flex;
        flex: 1;
        justify-content: space-around;
        .item {
          width: 28px;
          margin-top: -10px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          color: #fff;
          font-size: 18px;
          font-family: 思源黑体 CN;
          font-weight: 700;
          background-image: url("../img/数字背景.png");
          margin-right: 4px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>
