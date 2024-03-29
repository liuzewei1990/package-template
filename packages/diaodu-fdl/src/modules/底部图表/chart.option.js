export default function (color = [], title) {
  return {
    color,
    grid: {
      left: 0,
      top: 45,
      bottom: 0,
      right: 10,
      containLabel: true
    },
    legend: {
      right: 0,
      textStyle: {
        color: "rgb(255, 255, 255",
        lineHeight: 10,
        fontFamily: "思源黑体 CN",
        fontSize: 11
      },
      icon: "circle",
      itemWidth: 8, //图标宽
      itemHeight: 8, //图标高
      itemGap: 13 //间
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgb(0, 0, 10)",
      borderColor: "rgb(24, 129, 146)",
      textStyle: {
        color: "rgb(255, 255, 255)",
        fontFamily: "思源黑体 CN"
      }
    },

    title: [
      {
        text: "kW",
        textStyle: {
          fontSize: 18,
          color: "rgba(255, 255, 255,0.5)",
          fontSize: 12,
          fontFamily: "思源黑体 CN",
          fontWeight: "normal"
        },
        left: 10
      },
      {
        text: "MJ/m2",
        textStyle: {
          fontSize: 18,
          color: "rgba(255, 255, 255,0.5)",
          fontSize: 12,
          fontFamily: "思源黑体 CN",
          fontWeight: "normal"
        },
        right: 0,
        top: 23
      }
    ],
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          width: 2,
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
      data: ["0", "5", "15", "20", "22", "26", "30"]
    },

    yAxis: {
      type: "value",
      axisLine: {
        show: false,
        color: "#7491aea5"
      },
      axisLabel: {
        textStyle: {
          color: "rgb(143, 168, 191)"
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgb(143, 168, 191)"
        }
      }
    },
    series: []
  };
}

let colors = {
  0: ["rgba(248, 175, 74,0)", "rgba(248, 175, 74,1)"]
};
export const createLineSerie = function (options = {}, type = "0") {
  return {
    type: "line",
    symbolSize: 10,
    stack: "stack",
    animation: false,
    lineWidth: 1.2,
    symbolSize: 6,
    hoverAnimation: false,
    // itemStyle: {
    //   normal: {
    //     color: "#7083db"
    //   }
    // },
    lineStyle: {},
    ...options
  };
};
export const createBarSerie = function (options = {}) {
  return {
    type: "line",
    smooth: true, // 开启平滑效果,
    symbol: "none",
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
            color: options.color[0] // 100% 处的颜色
          },
          {
            offset: 1,
            color: options.color[1] //   0% 处的颜色
          }
        ],
        global: false // 缺省为 false
      }
    },
    color: options.color[2], // 设置该系列的颜色为红色
    ...options
  };
};
