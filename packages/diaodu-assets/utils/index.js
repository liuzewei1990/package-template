/**
 * 获取合并的行数
 * @param {*} data   [后台数据]
 * @param {*} key    [要合并的字段]
 * @param {*} target [后台数据对应的index]
 * @returns 合并的行数
 */
export const getRowSpanCount = function (data, key, target) {
  if (!Array.isArray(data)) return 1;
  data = data.map((_) => _[key]); // 只取出筛选项
  let preValue = data[0];
  const res = [[preValue]]; // 放进二维数组里
  let index = 0; // 二维数组下标
  for (let i = 1; i < data.length; i++) {
    if (data[i] === preValue) {
      // 相同放进二维数组
      res[index].push(data[i]);
    } else {
      // 不相同二维数组下标后移
      index += 1;
      res[index] = [];
      res[index].push(data[i]);
      preValue = data[i];
    }
  }
  const arr = [];
  res.forEach((_) => {
    const len = _.length;
    for (let i = 0; i < len; i++) {
      arr.push(i === 0 ? len : 0);
    }
  });
  return arr[target];
};

/**
 * 获取合并的行数
 * @param {*} data   [后台数据]
 * @param {*} key    [要合并的字段]
 * @returns 合并的行数
 */
export const getTableBodyCellSpanConfig = function (data, key) {
  let arr = [];
  let concat = 0;
  data.forEach((item, index) => {
    // 循环表格数据
    if (index === 0) {
      arr.push(1);
    } else {
      if (item[key] === data[index - 1][key]) {
        // 每一列需合并相同内容的字段
        arr[concat] += 1;
        arr.push(0);
      } else {
        arr.push(1);
        concat = index;
      }
    }
  });
  return { arr };
};

/**
 * 获取一个时间区间的每一天
 * @param {*} startDate 开始时间
 * @param {*} endDate 结束时间
 * @param {*} config 配置
 * @returns 数组
 */
export const getTimeDiffArr = (startDate, endDate, config = {}, toTarget = "arr") => {
  if (!window.moment) {
    throw new Error("getTimeDiffArr工具方法依赖moment.js");
  }
  const { type = "days", format = "YYYY-MM-DD" } = config;
  let daysList = [];
  let map = {};
  const start = moment(startDate);
  const end = moment(endDate);
  const day = end.diff(start, type);
  let t = start.format(format);
  if (toTarget === "arr") {
    daysList.push(t);
  } else {
    map[t] = null;
  }
  for (let i = 1; i <= day; i++) {
    let t = start.add(1, type).format(format);
    if (toTarget === "arr") daysList.push(t);
    else map[t] = null;
  }
  return toTarget === "arr" ? daysList : map;
};

/**
 * 计算占比
 * @param {*} val 当前值
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @param {*} unit 单位
 * @returns 占比值
 */
export const getProportionNumber = (val, min, max, unit = "") => {
  val = Number(val) || 0;
  min = Number(min) || 0;
  max = Number(max) || 0;

  if (val < 0) {
    return toFixed((Math.abs(Math.abs(val) + min) / (max - min)) * 100) + unit;
  } else if (val == 0) {
    return toFixed(((val - min) / (max - min)) * 100) + unit;
  } else {
    return toFixed(((val - min) / (max - min)) * 100) + unit;
  }
};

/**
 * 数组分组
 * @param {*} array 一维数组
 * @param {*} name 要分组的字段
 * @returns 二维数组
 */
export const arrayGroupBy = (array = [], name = "") => {
  const groups = {};
  array.forEach(function (o) {
    const group = JSON.stringify(o[name]);
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.values(groups);
};

/**
 * 数组分组
 * @param {*} array 一维数组
 * @param {*} name 要分组的字段
 * @returns 二维数组
 */
export const arrayGroupByObj = (array = [], name = "") => {
  const groups = {};
  array.forEach(function (o) {
    const group = JSON.stringify(o[name]);
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return groups;
};

/**
 * 根据日期时间进行排序
 * @param {*} property 属性名
 * @param {*} bol 倒序还是正序
 * @returns 排序好的list
 */
export const sortDate = (property = "", bol = true) => {
  return function (a, b) {
    let value1 = a[property];
    let value2 = b[property];
    if (bol) {
      return Date.parse(value1) - Date.parse(value2);
    } else {
      return Date.parse(value2) - Date.parse(value1);
    }
  };
};

/**
 * 计算饼图占比
 * @param {*} series
 * @returns
 */
export const countPin = function (series = []) {
  let data = [
    // { name: "原料", value: 64 },
    // { name: "生料", value: 86 },
    // { name: "烧成", value: 97 },
    // { name: "水泥", value: 62 },
    // { name: "发运", value: 89 }
  ];

  let allTotal = 0;
  data = series.map((item) => {
    // 单个合计
    let total = item.data.reduce((total, o) => (total += Number(o) || 0), 0);
    total = toFixed(total);
    allTotal += total;
    // console.log("求和：", total);
    return {
      title: item.name,
      total: total
    };
  });

  data = data.map((item) => {
    return {
      name: item.title,
      // 计算占比
      // value: Number(getProportionNumber(item.total, 0, allTotal))?.toFixed(2),
      value: item.total < 0 ? 0 : item.total
    };
  });

  return data;
};

/**
 * 计算饼图占比
 * @param {*} series
 * @returns
 */
export const countPieValue = function (series = []) {
  let data = [
    // { name: "原料", value: 64 },
    // { name: "生料", value: 86 },
    // { name: "烧成", value: 97 },
    // { name: "水泥", value: 62 },
    // { name: "发运", value: 89 }
  ];

  let allTotal = 0;
  data = series.map((item) => {
    // 单个合计
    let total = item.data.reduce((total, o) => (total += Number(o) || 0), 0);
    total = toFixed(total);
    allTotal += total;
    // console.log("求和：", total);
    return {
      title: item.name,
      total: total
    };
  });

  data = data.map((item) => {
    return {
      name: item.title,
      // 计算占比
      value: item.total < 0 ? 0 : item.total,
      ratio: Number(getProportionNumber(item.total, 0, allTotal))?.toFixed(2)
    };
  });

  return data;
};

/**
 * 获取url字符串参数
 * 注意：此方法为vue hash模式特定方法，不适用其他渠道，是解决兼容微信分享链接中取参错误的问题?from=singlemessage&isappinstalled=0
 */
export const getQueryStr = (urls = "") => {
  let url = urls || window.location.href.split("#")[1] || window.location.href;
  url = decodeURIComponent(url);
  let result = {};
  let arr = url.split("?");
  let params = arr[1] && arr[1].split("&");
  if (!params) return result;
  for (let i = 0; i < params.length; i++) {
    let item = params[i].split("=");
    item[0] = decodeURIComponent(item[0]);
    item[1] = decodeURIComponent(item[1]);
    result[item[0]] = item[1];
  }
  return result;
};

/**
 * 将json转换为url参数
 * @param {Object} queryObj 参数对象
 * @param {String} symbol 起始符号
 */
export const createQueryStr = (queryObj = {}, symbol = "") => {
  let queryStr = "";
  if (!this.isObject(queryObj)) return queryStr;

  queryStr += symbol;
  for (const key in queryObj) {
    let item = queryObj[key];
    item && (queryStr += `${key}=${item}&`);
  }
  queryStr = queryStr.substring(0, queryStr.length - 1);
  return queryStr;
};

/**
 * 图片转base64
 * @param {Str} src url
 * @param {Num} scale 缩放比例
 */
export const toBase64 = (src, scale = 1) => {
  if (!src) return;
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = () => {
      canvas.width = img.width / scale;
      canvas.height = img.height / scale;
      ctx.drawImage(img, 0, 0, img.width / scale, img.height / scale);
      let base64 = canvas.toDataURL("image/png", 0.01);
      resolve(base64);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = src;
  });
};

/**
 * 版本号对比
 * @param {Str} v1 当前版本号
 * @param {Str} v2 目标版本号
 */
export const isVersion = (v1, v2) => {
  if (typeof v1 !== "string" || typeof v2 !== "string") return false;
  var vs = [v1, v2].map(function (v) {
    return v
      .split(".")
      .map(function (n) {
        return ("00000" + n).slice(-5);
      })
      .join("");
  });
  return vs[0] >= vs[1];
};

/**
 * 数字乘以100 或者 数字除以100 解决精度问题
 * accMul(number,100) //乘以100
 * accMul(number,1) // 除以100
 * @param {*} arg1
 * @param {*} arg2
 */
export const accMul = (arg1, arg2) => {
  arg1 = arg1 || 0;
  var m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {
    // throw e;
  }
  try {
    m += s2.split(".")[1].length;
  } catch (e) {
    // throw e;
  }
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / Math.pow(10, m);
};

/**
 * 金额格式化小数点两位
 * toFixed(0) 0.00
 * toFixed(12.2) 12.20
 * toFixed(12.22) 12.22
 * @param {*} s
 */
export const toFixed = (s) => {
  let a = accMul(s, 100);
  let _a = s * 100;
  // console.log("直接乘以 * 100", _a)
  // console.log("accMul * 100", a)
  let b = Math.round(a);
  let _b = Math.round(_a);

  // console.log("直接乘以-round", _b)
  // console.log("accMul-round", b)
  let c = accMul(b, 0.01);
  // console.log("accMul * 0.01", c)

  return c.toFixed(2);
  // (Math.round((cart.billAmount) * 100) / 100).toFixed(2)
};

/**
 * 格式化千分单位（支持分和元格式化）
 * moneyFormatCN(1000000,true) = "1,000,000.00" = 元转换
 * moneyFormatCN(1000000,false) = "10,000.00" = 分转换
 * @param {*} value
 * @param {*} noAccMul
 */
export const moneyFormatCN = (value, noAccMul = true) => {
  if (!value) return "0.00";
  // value += "";
  // value = value.replace(/\./g, "");
  // if (!noAccMul) {
  //     //分到元
  //     value = utils.accMul(value, 0.01);
  // }
  var num = "";
  if (noAccMul) {
    // 格式化金额保留两位小数 10 =>> 10.00  12.12 =>> 12.12
    num = toFixed(value);
  } else {
    // 分到元 1000 =>> 10.00
    num = accMul(value, 0.01);
  }

  num += "";
  var reg = num.indexOf(".") > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g; //千分符的正则
  num = num.replace(reg, "$1,"); //千分位格式化
  if (num.indexOf(".") === -1) {
    return `${num}.00`;
  }
  num = num.split(".")[1] ? (num.split(".")[1].length == 1 ? num + "0" : num) : num;
  return `${num}`;
};

// 格式化金额
export const formatMoneyUnit = (money) => {
  if (money >= 10000) {
    return {
      originVal: money,
      val: (money / 10000).toFixed(2),
      unit: "万元"
    };
  } else {
    return {
      originVal: money,
      val: money.toFixed(2),
      unit: "元"
    };
  }
};

// 图标x轴文字 按照字数换行
export const xAxisLabelMaxWidth = (num = 2) => {
  let n = num;
  return function (val) {
    var strs = val.split(""); //转化为字符串数组
    var str = "";
    for (var i = 0, s; (s = strs[i++]); ) {
      str += s;
      if (!(i % n))
        //五个字符换行
        str += "\n";
    }
    return str;
  };
};

// 重写echarts的toolTip内容，并设置结合 series的__tooltip_unit__属性 设置series不同的单位
export const setTooltipFormatterToUnit = (echartOption) => {
  echartOption.tooltip = {
    formatter: (params) => {
      if (Array.isArray(params)) {
        let relVal = params[0].name;
        for (let i = 0; i < params.length; i++) {
          relVal +=
            "<br/>" +
            `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[i].color};"></span>` +
            params[i].seriesName +
            (params.seriesName ? " : " : "") +
            params[i].value +
            " " +
            (echartOption.series[params[i].seriesIndex].__tooltip_unit__ || "");
        }
        return relVal;
      } else {
        let relVal = params.name;
        relVal += "：" + params.value + " " + (echartOption.series[params.seriesIndex].__tooltip_unit__ || "");
        return relVal;
      }
    },
    ...echartOption.tooltip
  };
};

/**
 * echarts 系列中custom类型的自定义处理函数
 *
 * data.value字段值描述说明：
 * 0：分别为{系列项索引值}（从0开始）、
 * 1：y轴起始值(如果是从x轴开始则为0，叠加数值则为实际值如120)、
 * 2：实际y轴值、
 * 3：同系列中索引值（从1开始，表示第几项）、
 * 4：同系列数据项总数
 */
export const renderItem = (params, api) => {
  let categoryIndex = api.value(0);
  let start = api.coord([categoryIndex, api.value(1)]);
  let end = api.coord([categoryIndex, api.value(2)]);
  let width = api.size([0, api.value(2)])[0] * 0.8;
  const num = api.value(4); // 每个系列柱子数
  const currentIndex = api.value(3);
  const isOdd = num % 2 === 0;
  const midN = isOdd ? num / 2 : (num + 1) / 2;

  var rect = "";

  width = width / num;

  let rectX = start[0] - width / 2;

  const FIXED_WIDTH = 3; // 柱子间距

  // 数据处理，结构为 { itemStyle: { normal: { color: 'lightgreen' } }, name: '2011', value: [0, 0, 150, 2, 5] }
  // 其中value 分为五个维度，分别为{系列项}（从0开始）、y轴起始值(均为0)、实际值、同系列中索引值（从1开始）、同系列数据项总数

  if (num > 1) {
    if (isOdd) {
      if (currentIndex <= midN) {
        // 中位数左侧
        rectX = start[0] - width / 2 - width / 2 + (currentIndex - midN) * width - FIXED_WIDTH * (midN + 1 - currentIndex);
      } else {
        // 中位数右侧
        rectX = start[0] - width / 2 + width / 2 + (currentIndex - midN - 1) * width + FIXED_WIDTH * (currentIndex - midN);
      }
    } else {
      rectX = start[0] - width / 2 + (currentIndex - midN) * (width + FIXED_WIDTH);
    }
  }

  rect = {
    type: "rect",
    shape: window.echarts.graphic.clipRectByRect(
      { x: rectX, y: end[1], width: width, height: start[1] - end[1] },
      {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      }
    ),
    style: api.style()
  };

  return rect;
};

/**
 * 两个对象深度合并
 * @param {Object} target 目标对象
 * @param {Object} source 要合并的对象
 * @returns 新对象
 */
export const deepMerge = (target, source) => {
  if (typeof target !== "object" || typeof source !== "object") {
    return source;
  }

  // 将 source 的键合并到 target 上
  Object.keys(source).forEach((key) => {
    if (!target[key]) {
      target[key] = source[key];
    } else {
      target[key] = deepMerge(target[key], source[key]);
    }
  });

  return target;
};

/**
 * 两个对象深度合并
 * @param {Object} target 目标对象
 * @param {Object} source 要合并的对象
 * @returns 新对象
 */
export const mergeOption = (defaultOption = {}, newOption = {}) => {
  return window._.defaultsDeep(defaultOption, newOption);
};

/**
 * 两个对象深度合并
 * @param {Object} target 目标对象
 * @param {Object} source 要合并的对象
 * @returns 新对象
 */
export const defaultsDeep = (defaultOption = {}, newOption = {}) => {
  return window._.defaultsDeep(defaultOption, newOption);
};

/**
 * 深拷贝json
 * @param {*} obj
 * @returns
 */
export const deepCopyJSON = (obj) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {}
};

/**
 * 获取当月中当前时间的总分钟数
 * @returns
 */
export const getTotalMinutes = () => {
  let now = window.moment();
  // totalMinutes = 当月天数的总分钟数 + 当天小时的总分钟数 + 当时的总分钟数
  let totalMinutes = (now.date() - 1) * 24 * 60 + now.hours() * 60 + now.minutes(); // 计算总分钟数
  return totalMinutes;
};

/**
 * 获取一天的总分钟数
 * @returns
 */
export const getOneDayMinutes = () => {
  let now = window.moment();
  if (now.date() === 1) {
    // 处理1号
    return now.hours() * 60 + now.minutes();
  } else {
    return 1440;
  }
};

export const awaitTime = (time = 100) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

/*
 * 数组元素，有删除，无添加
 */
export const togglePush = (arr, item) => {
  let index = arr.indexOf(item);
  if (index === -1) {
    arr.push(item);
  } else {
    arr.splice(index, 1);
  }
};

/**
 * 通过key 过滤指定的树节点
 * @param {*} tree
 * @param {*} field
 * @returns
 */
export const filterTree = (tree, keyValue, option = { children: "children", key: "key" }) => {
  const { children, key } = option;
  // 如果树为空，直接返回空数组
  if (!tree || tree.length === 0) {
    return [];
  }

  // 遍历树的每个节点
  return tree.reduce((filteredTree, node) => {
    // 如果节点的key与指定的key相等，将节点添加到过滤后的树中
    if (node[key] === keyValue) {
      filteredTree.push(node);
    }

    // 如果节点有子节点，递归过滤子节点
    if (node[children] && node[children].length > 0) {
      const filteredChildren = filterTree(node[children], keyValue, option);
      // 如果子节点中有符合条件的节点，将父节点添加到过滤后的树中
      if (filteredChildren.length > 0) {
        let newNode = { ...node };
        newNode[children] = filteredChildren;
        filteredTree.push(newNode);
      }
    }

    return filteredTree;
  }, []);
};

/**
 * 查找指定的树节点
 * @param {*} node 树节点
 * @param {*} target 目标值
 * @param {*} option
 * @returns
 */
export const findTargetNode = (node, target, option = { children: "children", key: "key" }) => {
  const { children, key } = option;
  if (node === null) {
    return null;
  }

  if (node[key] === target) {
    return node;
  }

  for (let i = 0; i < node[children].length; i++) {
    const result = findTargetNode(node[children][i], target, option);
    if (result !== null) {
      return result;
    }
  }

  return null;
};

// 表格列排序
export const sortLocaleCompare = (a, b) => {
  if (isFinite(a) && isFinite(b)) {
    return Number(a) - Number(b);
  } else {
    a = a || "";
    b = b || "";
    return a.localeCompare(b);
  }
};

/**
 * 将数组列表按照相同某一字段push到map arr中
 * @param {*} arr
 * @param {*} field
 * @returns
 */
export const arrSplitToMap = (arr = [], field = "") => {
  let map = new Map();

  if (Array.isArray(arr) === false) {
    return map;
  }
  arr.forEach((item) => {
    let key = item[field];
    let arr = map.get(key);
    if (arr) {
      arr.push(item);
    } else {
      map.set(key, [item]);
    }
  });
  return map;
};

/**
 * 计算列表值到平均值
 * @param {*} arr
 * @param {*} field
 * @returns
 */
export const calcListValueToAverage = (target, field = "") => {
  if (Array.isArray(target) === true) {
    let newArr = target;
    let length = newArr.length;
    let total = newArr.reduce((total, item) => {
      let val = typeof item === "object" && !!field ? item[field] : item;
      val = Number(val) || 0;
      return (total += val);
    }, 0);
    return toFixed(total / length || 0);
  } else {
    let newArr = Object.values(target) || [];
    let length = newArr.length;
    let total = newArr.reduce((total, item) => {
      let val = item;
      val = Number(val) || 0;
      return (total += val);
    }, 0);
    return toFixed(total / length || 0);
  }
};

/**
 * 找到列表值 最小值 | 最大值
 * @param {*} type 最小值 | 最大值
 * @param {*} target map对象 || 数组
 * @param {*} field
 * @returns
 */
export const getListToValueByMinOrMax = (type = "min", target, field = "") => {
  if (Array.isArray(target) === true) {
    let newArr = target.map((item) => {
      let val = typeof item === "object" && !!field ? item[field] : item;
      val = Number(val) || 0;
      return val;
    });

    return toFixed(newArr.length === 0 ? 0 : Math[type].apply({}, newArr));
  } else {
    let newArr = Object.values(target) || [];
    return toFixed(newArr.length === 0 ? 0 : Math[type].apply({}, newArr));
  }
};

export const formatterValueUnit = function (params, ticket, callback, echartOption) {
  if (Array.isArray(params)) {
    let relVal = params[0].name;
    for (let i = 0; i < params.length; i++) {
      relVal +=
        "<br/>" +
        `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params[i].color};"></span>` +
        params[i].seriesName +
        (params.seriesName ? " : " : "") +
        ": " +
        window.h5plus.store.valueUnit.getValue(`sta$${params[i].value}`);
    }
    return relVal;
  } else {
    let relVal = params.name;
    relVal += "：" + params.value + ": " + window.h5plus.store.valueUnit.getValue(`sta$${params.value}`);
    return relVal;
  }
};

/**
 * 用于创建 excel导出时，需要合并的行和列的坐标系
 * @param {*} tableData 表格数据
 * @param {*} field 要合并的列字段，例如：time
 * @param {*} column excel列的起始位置和结束位置，一般为第几列，是每行共有的
 * @returns
 */
export const getExcelMergePosition = function (tableData, field = "time", column = { startColumn: 1, endColumn: 1 }) {
  let mergeList = [];
  let keys = [];
  tableData.forEach?.((row, index) => {
    let key = row[field];
    if (keys.includes(key) === false) {
      mergeList.push({
        startRow: index + 1,
        endRow: index + 1,
        ...column
      });
      keys.push(key);
    } else {
      mergeList[mergeList.length - 1].endRow++;
    }
  });
  return mergeList;
};
