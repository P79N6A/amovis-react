// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
var route_config = require("./route_config.json");
const devRouterConfig = route_config;
const routerConfig = global.pageApiData ? global.pageApiData : (window.pageApiData ? window.pageApiData : devRouterConfig);
export default routerConfig;
