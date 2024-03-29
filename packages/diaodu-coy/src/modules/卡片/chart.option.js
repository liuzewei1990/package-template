export default function () {
  return {
    grid: {
      left: "0",
      right: "30",
      bottom: "5",
      top: "10",
      containLabel: true
    },
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          width: 1,
          color: "#87b9e9a5"
        }
      },
      axisTick: { show: false },

      axisLabel: {
        fontSize: 10,
        interval: 0,
        textStyle: {
          color: "rgb(143, 168, 191)"
        }
      },
      data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
        color: "#7491aea5"
      },
      splitLine: {
        lineStyle: {
          color: "rgba(143, 168, 191,0.4)"
          // type: "dotted"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgb(143, 168, 191)"
        }
      }
    },
    series: []
  };
}

let colors = {
  1: ["rgba(74,163,248,0.0)", "rgba(74,163,248,1)"],
  2: ["rgba(248,175,74,0.0)", "rgba(248,175,74,1)"],
  3: ["rgba(191, 237, 253,0.0)", "rgba(191, 237, 253,1)"]
};
export const createLineSerie = function (options = {}, type = "1") {
  return {
    name: "总排放",
    type: "line",
    // smooth: true,
    symbolSize: 4,
    symbol: "circle",
    color: colors[type][1],
    itemStyle: {
      color: colors[type][1]
    },
    lineStyle: {
      width: 1
    },
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: colors[type][1] // 100% 处的颜色
          },
          {
            offset: 1,
            color: colors[type][0] //   0% 处的颜色
          }
        ],
        global: false // 缺省为 false
      }
    },
    data: [],
    ...options
  };
};
