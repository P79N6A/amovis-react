import ReactDOM from 'react-dom';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';
import router from './router';
import ReactDOMServer from 'react-dom/server';
ReactDOMServer.renderToString(router, {});
