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
      textStyle: {
        color: "#fff"
      }
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        shadowStyle: {
          color: "rgba(255, 255, 255, 0.26)"
        }
      }
    },
    xAxis: [
      {
        type: "category",
        data: ["0", "5", "15", "20", "22", "26", "30"],
        boundaryGap: false,
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "rgba(191, 237, 253, 0.2)"
          }
        }
      },
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
          show: false
        },
        data: []
      }
    ],
    yAxis: {
      ayisLine: {
        show: false
      },
      // x轴刻度线文字颜色
      axisLabel: {
        textStyle: {
          color: "#5c6076"
        }
      },
      // x轴线
      splitLine: {
        show: false,
        lineStyle: {
          color: "#fff"
        }
      },
      // Y轴
      axisLine: {
        lineStyle: {
          color: "#fff"
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
