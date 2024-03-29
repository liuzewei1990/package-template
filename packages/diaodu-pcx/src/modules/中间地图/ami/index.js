/* eslint-disable no-unsafe-negation */
import { isFunc, isStr, isCoor, callFuncs, getRemainderOfArray } from "./utils.js";
import { SVG_EL, SVG_STYLE_EL, SVG_PATH, SVG_TRACE, SVG_NODE, SVG_MOBILE, EASE_LINEAR } from "./constant.js";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

// 默认样式
const TRACE_DASH = "20 40";
const WIDTH = 1;
const OPACITY = 1;
const COLOR_DARK = "black";
const COLOR_LIGHT = "white";

function dataToPath(data, className, key) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    const cur = data[i];
    let path;
    if (isStr(cur)) {
      path = cur;
    } else if (isCoor(cur)) {
      const next = data[i + 1];
      if (next && isCoor(next)) {
        path = pointsToLinePath([cur, next]);
      }
    }

    if (path) {
      result += `<path class="${className}" id=${key} d="${path}"/>`;
    }
  }
  return result;
}

function dataToNode(data, className, style) {
  let result = "";
  let j = 0;
  const { images = [], radius } = style;
  for (let i = 0; i < data.length; i++) {
    const prev = data[i - 1];
    const cur = data[i];
    let x, y, rawPath;

    if (isStr(cur)) {
      [rawPath] = MotionPathPlugin.stringToRawPath(cur);
      [x, y] = rawPath;
    } else if (isCoor(cur)) {
      ({ x, y } = cur);
    }

    if (isCoor(cur) || (isStr(cur) && !isCoor(prev))) {
      const image = getRemainderOfArray(images, i + j);
      result += createNode([x, y], className, Object.assign({ image }, style));
    }

    if (i === data.length - 1 && isStr(cur)) {
      const [x1, y1] = rawPath.slice(-2);
      const image = getRemainderOfArray(images, i + j + 1);
      result += createNode([x1, y1], className, Object.assign({ image }, style));
    }

    if (isStr(cur)) {
      j--;
    }
  }
  return result;
}

function createNode(position, className, style) {
  const { radius = 5, image, offsetX = 0, offsetY = 0 } = style;
  const [x, y] = position;
  let node;
  if (image) {
    node = `<image
      class="${className}"
      href="${image}"
      x="${x + offsetX - radius}" y="${y + offsetY - radius}"
      width="${radius * 2}" height="${radius * 2}"
    />`;
  } else {
    node = `<circle class="${className}" cx="${x + offsetX}" cy="${y + offsetY}" r="${radius}" />`;
  }
  return node;
}

function dataToMobile(data, id, style, key) {
  const [first, second] = data;
  let pos;
  if (isStr(first)) {
    pos = getPositionOnPath(first);
  } else {
    let nextPoint;
    if (isStr(second)) {
      const [rawPath] = MotionPathPlugin.stringToRawPath(second);
      const [x, y] = rawPath;
      nextPoint = { x, y };
    } else {
      nextPoint = second;
    }
    pos = getPositionOnPath(pointsToLinePath([first, nextPoint]));
  }

  return createMobile(pos, id, style, key);
}

function createMobile(positon, id, style, key) {
  const { x, y, angle } = positon;
  const { size, image, autoRotate, repeat = 1 } = style;
  const [w = 16, h = 16] = size;
  let mobile;

  for (let index = 0; index < repeat; index++) {
    mobile += `
      <image
        id="${id}-${key}-${index}"
        href="${image}"
        width="${w}"
        height="${h}"
        transform="translate(${x - w / 2},${y - h / 2}), rotate(${autoRotate ? angle : 0})"
        transform-origin="${w / 2} ${h / 2}"
        />
      `;
  }

  return mobile;
}

function getPositionOnPath(path) {
  const rawPath = MotionPathPlugin.stringToRawPath(path);
  MotionPathPlugin.cacheRawPathMeasurements(rawPath);
  return MotionPathPlugin.getPositionOnPath(rawPath, 0, true); // rawPath、progress、includeAngle
}

function pointsToLinePath(points) {
  let result = "";
  const length = points.length;
  if (length > 1) {
    const [first] = points;
    result += `M ${first.x} ${first.y}`;
    for (let i = 1; i < length; i++) {
      const cur = points[i];
      result += ` L ${cur.x} ${cur.y}`;
    }
  }
  return result;
}

function initSVGElement(container, data, svg, style, autoRotate, key) {
  if (isStr(container)) {
    container = document.querySelector(container);
    if (!container) {
      throw Error(`element ${container} was not found.`);
    }
  }
  if (!container instanceof HTMLElement) {
    throw TypeError("param container is not a HTMLElement.");
  }
  if (!data instanceof Array) {
    throw TypeError("param data is not an Array.");
  }
  if (!data.length) {
    throw Error("param data cannot be an empty array.");
  }
  if (data.length === 1 && isCoor(data[0])) {
    throw Error("Only one coordinate couldn't generate the route.");
  }

  const { flow: flowStyle, mobile: mobileStyle = {}, node: nodeStyle } = style;
  mobileStyle.autoRotate = autoRotate;

  let { width, height } = svg;
  if (!width || !height) {
    ({ width, height } = container.getBoundingClientRect());
  }

  container.innerHTML = `
    <svg id="path-svg-${key}" style="overflow:visible" viewBox="0 0 ${width} ${height}">
      ${dataToPath(data, SVG_PATH.slice(1), key)}
      ${flowStyle ? dataToPath(data, SVG_TRACE.slice(1)) : ""}
      ${nodeStyle ? dataToNode(data, SVG_NODE.slice(1), nodeStyle) : ""}
      ${dataToMobile(data, SVG_MOBILE.slice(1), mobileStyle, key)}
    </svg>
  `;
  return container;
}

function initSVGStyle(style) {
  let styleEl = document.head.querySelector(SVG_STYLE_EL);
  if (!styleEl) {
    const { line = {}, flow = {}, node = {}, mobile = {} } = style;
    const { width: lineWidth = WIDTH, color: lineColor = COLOR_DARK, opacity: lineOpacity = OPACITY, dash: lineDash = "0" } = line;
    const { width: flowWidth = WIDTH, color: flowColor = COLOR_LIGHT, opacity: flowOpacity = OPACITY, dash: flowDash = TRACE_DASH } = flow;
    const { borderWidth: nodeStrokeWidth = WIDTH, borderColor: nodeStroke = COLOR_DARK, fill: nodeFill = COLOR_LIGHT } = node;
    const { borderWidth: mobileStrokeWidth = WIDTH, borderColor: mobileStroke = COLOR_DARK, fill: mobileFill = COLOR_LIGHT } = mobile;

    styleEl = document.createElement("style");
    styleEl.id = SVG_STYLE_EL.slice(1);
    styleEl.innerHTML = `
      ${SVG_EL} {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      ${SVG_PATH} {
        stroke: ${lineColor};
        stroke-width: ${lineWidth};
        stroke-dasharray: ${lineDash};
        opacity: ${lineOpacity};
        fill: none;
      }
      ${SVG_TRACE} {
        stroke: ${flowColor};
        stroke-width: ${flowWidth};
        stroke-dasharray: ${flowDash};
        opacity: ${flowOpacity};
        fill: none;
      }
      ${SVG_NODE} {
        stroke: ${nodeStroke};
        stroke-width: ${nodeStrokeWidth};
        fill: ${nodeFill};
      }
      ${SVG_MOBILE} {
        stroke: ${mobileStroke};
        stroke-width: ${mobileStrokeWidth};
        fill: ${mobileFill};
      }
    `;
    document.head.appendChild(styleEl);
  }

  return styleEl;
}

export default class AMi {
  #callbacks = {
    start: [],
    end: [],
    pass: [],
    repeat: []
  };
  #mobile;
  #flow;
  #container;
  #nodeIndex = 0;
  #seeking = false;

  get mobile() {
    return this.#mobile;
  }

  get flow() {
    return this.#flow;
  }

  get nodes() {
    return this.#container.querySelectorAll(SVG_NODE);
  }

  constructor(container, data, { motion = {}, svg = {}, style = {} }, key = "work") {
    const { mobile: mobileMotion = {}, ease = EASE_LINEAR, flow: flowMotion = {} } = motion;
    const { ease: mobileEase = EASE_LINEAR, autoRotate = false, repeat = 0, yoyo = false, duration = null, speed = 100 } = mobileMotion;
    let { durations = [] } = mobileMotion;
    let yoyoComplete = false;

    this.#container = initSVGElement(container, data, svg, style, autoRotate, key);
    const { mobile: mobileStyle = { repeat: 50 } } = style;
    initSVGStyle(style);

    this.#mobile = gsap.timeline({
      paused: true
    });

    let path = document.getElementById(key);
    const awa = (duration / mobileStyle.repeat) * (mobileStyle.repeat - 1);

    for (let index = 0; index < mobileStyle.repeat; index++) {
      let el = `${SVG_MOBILE}-${key}-${index}`;
      this.#mobile.to(
        el,
        {
          duration: duration || 0.01,
          ease: mobileEase,
          repeat: -1,
          motionPath: {
            path: path,
            align: path,
            autoRotate,
            alignOrigin: [0.5, 0.5]
          },
          onComplete: () => {
            if (!this.#seeking) callFuncs(this.#callbacks.pass, ++this.#nodeIndex);
          },
          onReverseComplete: () => {
            if (yoyoComplete) callFuncs(this.#callbacks.pass, --this.#nodeIndex);
          }
        },
        // `point-${i}`
        // 0.4 * index
        // "-=2.5"
        `-=${awa}` // 实现蚂蚁线
      );
    }

    if (flowMotion.duration) {
      const { flow: flowStyle = {} } = style;
      const { dash: flowDash = TRACE_DASH } = flowStyle;
      const strokeDashoffset = -flowDash.split(" ").reduce((a, b) => Number(a) + Number(b), 0);
      this.#flow = gsap.to(SVG_TRACE, {
        strokeDashoffset,
        repeat: -1,
        ease: EASE_LINEAR,
        duration: flowMotion.duration
      });
    }
  }

  addEventListener(type, callback) {
    if (!isFunc(callback)) {
      throw TypeError("callback is not a Function.");
    }

    if (this.#callbacks[type]) {
      this.#callbacks[type].push(callback);
    }
  }

  removeEventListener(type, callback) {
    if (!isFunc(callback)) {
      throw TypeError("callback is not a Function.");
    }

    const i = this.#callbacks[type].findIndex((el) => el === callback);
    if (i > -1) {
      this.#callbacks[type].splice(i, 1);
    }
  }

  kill() {
    this.#mobile.kill();
    if (this.#flow) this.#flow.kill();
    this.#container.innerHTML = "";
  }

  seek(position) {
    this.#seeking = true;
    this.#mobile.seek(this.#mobile._prev.labels[`point-${position}`]);
    this.#nodeIndex = position;
    this.#seeking = false;
  }
}
