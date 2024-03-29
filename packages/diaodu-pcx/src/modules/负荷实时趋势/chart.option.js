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
  0: ["rgba(46, 105, 240,0.2)", "rgba(46, 105, 240,1)"],
  1: ["rgba(114, 244, 238,0.2)", "rgba(114, 244, 238,1)"],
  2: ["rgba(164, 241, 147,0.2)", "rgba(164, 241, 147,1)"],
  3: ["rgba(255,236,154,0.2)", "rgba(255,236,154,1)"],
  4: ["rgba(248,175,74,0.2)", "rgba(248,175,74,1)"]
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
    data: [120, 132, 101, 134, 90, 200, 110],
    ...options
  };
};
