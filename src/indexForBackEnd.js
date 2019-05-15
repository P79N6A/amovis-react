import React from 'react';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@alifd/next/reset.scss';
import CommonPage from './pages/CommonPage';
import Router from './router_service';
import { StaticRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
let location = global.pageLocation;
print(ReactDOMServer.renderToString(<StaticRouter location={location}>{Router}</StaticRouter>));