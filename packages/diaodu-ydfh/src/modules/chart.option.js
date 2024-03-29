export default function (color = []) {
  return {
    color,
    grid: {
      left: 10,
      top: "10%",
      bottom: 30,
      right: 10,
      containLabel: true
    },
    legend: {
      bottom: 0,
      itemHeight: 4,
      itemWidth: 16,
      textStyle: {
        color: "rgb(143, 168, 191)",
        fontSize: 12,
        fontFamily: "思源黑体 CN"
      }
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
          color: "rgb(143, 168, 191)",
          type: "dotted"
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
