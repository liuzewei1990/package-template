export default function () {
  return {
    // backgroundColor: "#000",
    color: ["rgb(65, 162, 255)", "rgb(65, 255, 239)", "rgb(243, 216, 96)"],
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: true
    },
    tooltip: {
      trigger: "item"
    },
    xAxis: {
      type: "value",
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      show: true,
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      data: ["出租居住"],
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: "农户收入",
        type: "bar",
        stack: "all",
        zlevel: 1,
        barWidth: 8,
        itemStyle: {
          barBorderRadius: [20, 0, 0, 20]
        },
        data: [5]
      },
      {
        name: "集体收入",
        type: "bar",
        stack: "all",
        zlevel: 1,
        barWidth: 8,
        data: [3]
      },
      {
        name: "新增产值",
        type: "bar",
        stack: "all",
        zlevel: 1,
        barWidth: 8,
        itemStyle: {
          barBorderRadius: [0, 20, 20, 0]
        },
        data: [12]
      },
      {
        name: "",
        type: "bar",
        barWidth: 8,
        barGap: "-100%",
        data: [30],
        itemStyle: {
          normal: {
            color: "rgba(100, 110, 132, 0)"
          }
        }
      }
    ]
  };
}

let colors = {
  0: ["rgba(255,236,154,0.0)", "rgba(255,236,154,1)"]
};
export const createLineSerie = function (options = {}, type = "0") {
  return {
    name: "农户收入",
    type: "bar",
    stack: "all",
    zlevel: 1,
    barWidth: 8,
    itemStyle: {
      barBorderRadius: [20, 0, 0, 20]
    },
    data: [5],
    ...options
  };
};
