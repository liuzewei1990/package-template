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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
        color: "#7491aea5"
      },
      splitLine: {
        lineStyle: {
          color: "rgba(191, 237, 253, 0.2)",
          type: "solid"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgb(143, 168, 191)"
        }
      }
    },
    color: ["rgb(46, 105, 240)", "rgb(114, 244, 238)", "rgba(164, 241, 147, 0.9)", "rgb(243, 216, 96)"],
    series: []
  };
}

let colors = {
  1: "rgb(46, 105, 240)",
  2: "rgb(114, 244, 238)",
  3: "rgba(164, 241, 147, 0.9)",
  4: "rgb(243, 216, 96)"
};
export const createLineSerie = function (options = {}, type = "1") {
  return {
    type: "bar",
    barWidth: 12,
    stack: "barStack",
    emphasis: {
      focus: "series"
    },
    ...options
  };
};
