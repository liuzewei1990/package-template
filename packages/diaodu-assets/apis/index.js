import config  from "../config/api.config";
const { service } = window.h5plus || {};
const baseAdminURL = config.baseAdminURL;
const baseApiURL = config.baseApiURL;
const baseMockURL = config.baseMockURL;

/**
 * API统一管理规范
 * @param {Obj} params  请求体参数
 * @param {Obj} head    请求头参数
 * @returns Promise
 */

// PageVo
export const PageVo = service?.work?.PageVo;

// 通用路由接口
export const commonRouteApi = (params = {}, head = {}) => {
  return service.work.post(baseApiURL, "/router/route", params, head, false, false);
};

