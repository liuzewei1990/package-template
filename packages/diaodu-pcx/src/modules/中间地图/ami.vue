<template>
  <section :id="`svg-container-${uuid}`" class="ami-container dev1" :style="{ width: iw, height: ih, left: ix, top: iy }"></section>
</template>

<script>
  import AMi from "./ami/index.js";
  import svgPathReverse from "svg-path-reverse";
  import { array, number, object, string } from "vue-types";
  import map from "./map.js";

  export default {
    components: {},
    props: {
      path: string().def("M46 3.09326L24.2523 14.6067C11.4852 21.3658 3.5 34.6285 3.5 49.0744L3.5 231.593"),
      width: number().def(),
      height: number().def(),
      left: number().def(""),
      top: number().def(""),
      links: array().def(() => []),
      option: object().def(() => ({})),
      mobileImg: string().def(""),
      mobileNum: number().def(1),
      duration: number().def(1)
    },
    computed: {
      iw() {
        return this.width + "px";
      },
      ih() {
        return this.height + "px";
      },
      ix() {
        return this.left + "px";
      },
      iy() {
        return this.top + "px";
      }
    },
    data() {
      return {
        uuid: window.h5plus.utils.base.guid(),
        motionPath: null
      };
    },
    created() {
      map.setVm(this.links, this);
    },
    mounted() {
      // this.toUp();
      window[this.uuid] = this;
    },
    methods: {
      toUp() {
        let path = this.path;
        this.init(path);
        this.motionPath.mobile.play();
      },
      toDow() {
        let path = svgPathReverse.reverse(this.path);
        this.init(path);
        this.motionPath.mobile.play();
      },
      play() {
        this.motionPath.mobile.play();
      },
      pause() {
        this.motionPath.mobile.pause();
      },
      init(path) {
        this.kill();

        const data = [path];

        const motionPath = new AMi(
          "#svg-container-" + this.uuid,
          data,
          {
            svg: {
              width: this.width,
              height: this.height
            },
            motion: {
              mobile: {
                ease: "none",
                duration: this.duration,
                repeat: -1,
                autoRotate: true
              }
            },
            style: {
              line: {
                width: 0,
                color: "#fff",
                opacity: 0.4
              },
              mobile: {
                image: this.mobileImg,
                repeat: this.mobileNum,
                size: [20, 20]
              }
            }
          },
          this.uuid
        );
        this.motionPath = motionPath;
      },
      kill() {
        this.motionPath?.kill();
        this.motionPath = null;
      },
      destroyed() {
        this.kill();
      }
    }
  };
</script>

<style lang="less" scoped>
  .ami-container {
    position: absolute;
    // width: 52.5px;
    // height: 228.5px;
  }
</style>
./ami/ami.js
