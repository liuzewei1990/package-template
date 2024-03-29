export default function () {
  return {
    grid: {
      left: 50,
      right: 0,
      top: 0,
      containLabel: true,
      zlevel: 99999
    },
    graphic: {
      elements: [
        {
          z: 9,
          type: "image",
          style: {
            image: require("../../img/chart.png"),
            width: 69,
            height: 69
          },
          left: "center",
          top: "center"
        },
        {
          z: 0,
          type: "image",
          style: {
            image: require("../../img/line.png"),
            width: 106,
            height: 2
          },
          left: "center",
          bottom: 18
        }
        // {
        //   z: 9999,
        //   // 一个图形元素，类型是 group，可以嵌套子节点。
        //   type: "group",
        //   left: "center",
        //   top: "center",
        //   children: [
        //     {
        //       type: "text",
        //       style: {
        //         text: "已履约",
        //         fill: "#B9C9D5",
        //         x: 20
        //       }
        //     },
        //     {
        //       type: "text",
        //       style: {
        //         text: "未履约",
        //         fill: "#B9C9D5",
        //         x: 115
        //       }
        //     }
        //   ]
        // }
      ]
    },
    title: {
      show: true,
      text: "功率因数",
      left: "50%",
      bottom: 20,
      textAlign: "center",
      textStyle: {
        color: "rgb(255, 255, 255)",
        fontSize: 12,
        fontFamily: "思源黑体 CN"
      }
    },
    series: [
      // 指针
      {
        type: "gauge",
        radius: "60%", // 位置
        center: ["50%", "50%"],
        min: 0,
        max: 100,
        z: 999,
        startAngle: 180,
        endAngle: 0,
        axisLine: {
          show: false
        },
        data: [
          {
            value: 50,
            name: "kwh"
          }
        ],
        pointer: {
          // 仪表盘指针
          show: false
        },
        itemStyle: {
          normal: {
            color: "rgb(242, 246, 254)"
          }
        },
        axisTick: {
          // 刻度
          show: false
        },
        splitLine: {
          // 分割线
          show: false
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        title: {
          color: "rgb(143, 168, 191)",
          fontWeight: 400,
          fontSize: 10,
          fontFamily: "思源黑体 CN",
          offsetCenter: [0, 20]
        },
        detail: {
          valueAnimation: true,
          width: "100%",
          lineHeight: 40,
          offsetCenter: [0, 0],
          textStyle: {
            color: "rgb(255, 255, 255)",
            fontWeight: 700,
            fontSize: 24,
            fontFamily: "思源黑体",
            textShadowColor: "rgb(103, 190, 255)", // 文字本身的阴影颜色。
            textShadowBlur: 10, // 文字本身的阴影长度。
            textShadowOffsetX: 0, // 文字本身的阴影 X 偏移。
            textShadowOffsetY: 0 //  文字本身的阴影 Y 偏移。
          },
          formatter: function (params) {
            return params;
          }
        }
      },
      // 指针
      {
        z: 8,
        type: "gauge",
        radius: "60%", // 位置
        center: ["50%", "50%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        axisLine: {
          show: false
        },
        data: [
          {
            value: "50"
            // name: "项目数"
          }
        ],
        pointer: {
          // 仪表盘指针
          show: true,
          length: "120%",
          radius: "20%",
          width: 2 //指针粗细
        },
        itemStyle: {
          normal: {
            color: "rgb(242, 246, 254)"
          }
        },
        axisTick: {
          // 刻度
          show: false
        },
        splitLine: {
          // 分割线
          show: false
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false,
          formatter: function (value) {
            return value + "%";
          },
          offsetCenter: ["50%", "50%"],
          fontSize: "18px",
          color: "red"
        },
        title: {
          show: true,
          offsetCenter: [0, "50%"],
          color: "#08b5d6"
        }
      },
      //内侧面积
      {
        type: "gauge",
        radius: "73%",
        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        z: 2,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 30, // 宽度
            color: [
              [
                50 / 100,
                new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                  {
                    offset: 0,
                    color: "rgb(9, 27, 52)"
                  },
                  {
                    offset: 0.3,
                    color: "rgb(12, 59, 112)"
                  },
                  {
                    offset: 1,
                    color: "rgb(10, 142, 209)"
                  }
                ])
              ],
              [1, "rgba(255, 255, 255, 0)"]
            ] // 颜色,
          }
        },
        axisTick: {
          // 刻度
          show: false,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: false,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      },
      //最外则线
      {
        type: "gauge",
        radius: "82%",
        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 2, // 宽度
            color: [
              [
                50 / 100,
                new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(255, 255, 255, 0)"
                  },
                  {
                    offset: 0.3,
                    color: "rgb(255, 255, 255)"
                  },
                  {
                    offset: 1,
                    color: "rgba(146, 242, 253, 0.22)"
                  }
                ])
              ],
              [1, "rgba(255, 255, 255, 0)"]
            ] // 颜色,
          }
        },
        axisTick: {
          // 刻度
          show: false,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: false,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      },

      //最外则线
      {
        type: "gauge",
        radius: "73%",
        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 2, // 宽度
            color: [[1, "rgb(58, 133, 255)"]], // 颜色,
            shadowColor: "#fff", //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {
          // 刻度
          show: false,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: false,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      },
      // 外侧灰色轴线
      {
        type: "gauge",

        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 1, // 宽度
            color: [[1, "rgb(58, 235, 255)"]] // 颜色
          }
        },
        axisTick: {
          // 刻度
          show: true,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: true,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: true,
          distance: 5,
          padding: [0, 0, 0, 0],
          color: " rgb(143, 168, 191)",
          fontSize: "10",
          fantFamliy: "思源黑体 CN"
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      }
    ]
  };
}
export const createLineSerie = function (options = {}, type = "0") {
  return {
    title: {
      show: true,
      text: "功率因数",
      left: "50%",
      bottom: 20,
      textAlign: "center",
      textStyle: {
        color: "rgb(255, 255, 255)",
        fontSize: 12,
        fontFamily: "思源黑体 CN"
      }
    },
    series: [
      // 指针
      {
        type: "gauge",
        radius: "60%", // 位置
        center: ["50%", "50%"],
        min: 0,
        max: 100,
        z: 999,
        startAngle: 180,
        endAngle: 0,
        axisLine: {
          show: false
        },
        data: [
          {
            value: 50,
            name: "kwh"
          }
        ],
        pointer: {
          // 仪表盘指针
          show: false
        },
        itemStyle: {
          normal: {
            color: "rgb(242, 246, 254)"
          }
        },
        axisTick: {
          // 刻度
          show: false
        },
        splitLine: {
          // 分割线
          show: false
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        title: {
          color: "rgb(143, 168, 191)",
          fontWeight: 400,
          fontSize: 10,
          fontFamily: "思源黑体 CN",
          offsetCenter: [0, 20]
        },
        detail: {
          valueAnimation: true,
          width: "100%",
          lineHeight: 40,
          offsetCenter: [0, 0],
          textStyle: {
            color: "rgb(255, 255, 255)",
            fontWeight: 700,
            fontSize: 24,
            fontFamily: "思源黑体",
            textShadowColor: "rgb(103, 190, 255)", // 文字本身的阴影颜色。
            textShadowBlur: 10, // 文字本身的阴影长度。
            textShadowOffsetX: 0, // 文字本身的阴影 X 偏移。
            textShadowOffsetY: 0 //  文字本身的阴影 Y 偏移。
          },
          formatter: function (params) {
            return params;
          }
        }
      },
      // 指针
      {
        z: 8,
        type: "gauge",
        radius: "60%", // 位置
        center: ["50%", "50%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        axisLine: {
          show: false
        },
        data: [
          {
            value: "20"
            // name: "项目数"
          }
        ],
        pointer: {
          // 仪表盘指针
          show: true,
          length: "120%",
          radius: "20%",
          width: 2 //指针粗细
        },
        itemStyle: {
          normal: {
            color: "rgb(242, 246, 254)"
          }
        },
        axisTick: {
          // 刻度
          show: false
        },
        splitLine: {
          // 分割线
          show: false
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false,
          formatter: function (value) {
            return value + "%";
          },
          offsetCenter: ["50%", "50%"],
          fontSize: "18px",
          color: "red"
        },
        title: {
          show: true,
          offsetCenter: [0, "50%"],
          color: "#08b5d6"
        }
      },
      //内侧面积
      {
        type: "gauge",
        radius: "73%",
        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        z: 2,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 30, // 宽度
            color: [
              [
                50 / 100,
                new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                  {
                    offset: 0,
                    color: "rgb(9, 27, 52)"
                  },
                  {
                    offset: 0.3,
                    color: "rgb(12, 59, 112)"
                  },
                  {
                    offset: 1,
                    color: "rgb(10, 142, 209)"
                  }
                ])
              ],
              [1, "rgba(255, 255, 255, 0)"]
            ] // 颜色,
          }
        },
        axisTick: {
          // 刻度
          show: false,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: false,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      },
      //最外则线
      {
        type: "gauge",
        radius: "82%",
        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 2, // 宽度
            color: [
              [
                30 / 100,
                new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(255, 255, 255, 0)"
                  },
                  {
                    offset: 0.3,
                    color: "rgb(255, 255, 255)"
                  },
                  {
                    offset: 1,
                    color: "rgba(146, 242, 253, 0.22)"
                  }
                ])
              ],
              [1, "rgba(255, 255, 255, 0)"]
            ] // 颜色,
          }
        },
        axisTick: {
          // 刻度
          show: false,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: false,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      },

      //最外则线
      {
        type: "gauge",
        radius: "73%",
        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 2, // 宽度
            color: [[1, "rgb(58, 133, 255)"]], // 颜色,
            shadowColor: "#fff", //默认透明
            shadowBlur: 10
          }
        },
        axisTick: {
          // 刻度
          show: false,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: false,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: false
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      },
      // 外侧灰色轴线
      {
        type: "gauge",

        // center: ["20%", "60%"],
        min: 0,
        max: 100,
        startAngle: -45,
        endAngle: 225,
        clockwise: false,
        splitNumber: 8,
        axisLine: {
          show: true,
          lineStyle: {
            // 轴线样式
            width: 1, // 宽度
            color: [[1, "rgb(58, 235, 255)"]] // 颜色
          }
        },
        axisTick: {
          // 刻度
          show: true,
          distance: 0,
          lineStyle: {
            color: "#395585"
          }
        },
        splitLine: {
          // 分割线
          show: true,
          distance: 1,
          length: 5,
          lineStyle: {
            color: "#395585",
            width: 1,
            type: "solid"
          }
        },
        axisLabel: {
          // 刻度标签
          show: true,
          distance: 5,
          padding: [0, 0, 0, 0],
          color: " rgb(143, 168, 191)",
          fontSize: "10",
          fantFamliy: "思源黑体 CN"
        },
        pointer: {
          // 仪表盘指针
          show: false
        },
        detail: {
          // 仪表盘详情
          show: false
        }
      }
    ],
    ...options
  };
};
