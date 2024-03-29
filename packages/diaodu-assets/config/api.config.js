const config = {
  development: {
    baseAdminURL: "/energy-admin",
    baseApiURL: "/energy-api",
    baseMockURL: "http://192.168.7.19:7300/mock/636868dc39e6ec00214f6692/zhny"
  },
  productionTest: {
    baseAdminURL: "/energy-admin",
    baseApiURL: "/energy-api",
    baseMockURL: "http://192.168.7.19:7300/mock/636868dc39e6ec00214f6692/zhny"
  },
  production: {
    baseAdminURL: "/energy-admin",
    baseApiURL: "/energy-api",
    baseMockURL: "http://192.168.7.19:7300/mock/636868dc39e6ec00214f6692/zhny"
  }
};

export default config[process.env.VUE_APP_ENV || "development"];
