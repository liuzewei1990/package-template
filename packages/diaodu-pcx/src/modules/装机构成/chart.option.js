export default function () {
  return {
    // backgroundColor: "#000",
    grid: {
      left: 50,
      right: 0,
      top: 0,
      containLabel: true,
      zlevel: 99999
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}次 ({d}%)"
    },
    title: {
      text: "{val|" + "12345" + "}\n{name|" + "kwh" + "}",
      top: "center",
      left: "center",
      textStyle: {
        rich: {
          name: {
            fontSize: 10,
            fontWeight: "normal",
            color: "#fff",
            padding: [3, 0]
          },
          val: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            textShadowColor: "rgb(103, 190, 255)",
            textShadowBlur: 15
          }
        }
      }
    },
    graphic: {
      elements: [
        {
          z: 0,
          type: "image",
          style: {
            image: require("../../img/pie.png"),
            width: 150,
            height: 150
          },
          left: "center",
          top: "0"
        }
      ]
    },
    series: [
      {
        name: "",
        type: "pie",
        // minAngle: 5,
        //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
        avoidLabelOverlap: true, //是否启用防止标签重叠策略
        radius: ["55%", "80%"],
        // radius: ["100", "150"],
        center: ["50%", "50%"],

        labelLine: false,
        // radius: ["50%", "50%"],
        itemStyle: {
          normal: {
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 8
          }
        },
        data: [
          {
            value: 300,
            name: "一级告警",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(46, 105, 240, 0.14)" },
                { offset: 1, color: "rgba(46, 105, 240, 1)" }
              ])
            }
          },
          {
            value: 300,
            name: "四级告警",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(114, 244, 238, 0.4)" },
                { offset: 1, color: "rgba(114, 244, 238, 1)" }
              ])
            }
          },

          {
            value: 300,
            name: "三级告警",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(164, 241, 147, 0.27)" },
                { offset: 1, color: "rgba(164, 241, 147, 1)" }
              ])
            }
          },
          {
            value: 300,
            name: "二级告警",
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(243, 216, 96, 0.09)" },
                { offset: 1, color: "rgba(243, 216, 96, 1)" }
              ])
            }
          }
        ]
      }
    ]
  };
}

let colors = {
  0: ["rgba(255,236,154,0.0)", "rgba(255,236,154,1)"]
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
    data: [120, 132, 101, 134, 90, 200, 110],
    ...options
  };
};
