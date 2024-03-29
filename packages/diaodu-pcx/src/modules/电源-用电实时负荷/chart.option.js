export default function () {
  return {
    grid: {
      left: "20",
      right: "20",
      bottom: "10",
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
      data: [0, 4, 8, 12, 16, 20, 24]
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
        color: "#7491aea5"
      },
      splitLine: {
        lineStyle: {
          color: "rgb(143, 168, 191)",
          type: "dotted"
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
  0: ["rgba(74,163,248,0.0)", "rgba(74,163,248,1)"],
  1: ["rgba(248,175,74,0.0)", "rgba(248,175,74,1)"]
};
export const createLineSerie = function (options = {}, type = "0") {
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
      width: 2
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
