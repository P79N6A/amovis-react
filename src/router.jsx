/**
 * 定义应用路由
 */
import { HashRouter, Switch, Route, BrowserRouter  } from 'react-router-dom';
import React from 'react';
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';
import Page15 from './pages/Page15'
// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
const router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/user" component={UserLayout} /> */}
        <Route path="/" component={BasicLayout} />
        {/* <Route path="/page15" component={Page15} /> */}

      </Switch>
    </HashRouter>
  );
};

export default router();
