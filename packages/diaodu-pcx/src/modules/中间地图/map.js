class Maping {
  constructor() {
    this.map = {};
    this.conf = {
      0: "toUp",
      1: "toDow"
    };
  }

  setVm(key, vm) {
    this.map[key] = vm;
  }

  findVmByDirection(link) {
    let vm = null;
    let index = null;
    Object.keys(this.map).forEach((key) => {
      let keys = key.split(",");
      // 存在
      if (keys?.includes(link)) {
        vm = this.map[key];
        index = keys.findIndex((o) => o === link);
      }
    });

    return vm[this.conf[index]];
  }
}
export default new Maping();
