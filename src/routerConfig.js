// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import Reserve from './pages/Reserve';
import Asset from './pages/Asset';
import OrderList from './pages/OrderList';
import Goods from './pages/Goods';
import Membership from './pages/Membership';
import AddReserve from './pages/AddReserve';
import AddGoods from './pages/AddGoods';
import TestOne from './pages/TestOne';
import TestTwo from './pages/TestTwo';
import TestForm from './pages/TestForm';
import Page15 from './pages/Page15';
import App from './pages/App';

const routerConfig = [
  {
    path: '/membership',
    component: Membership,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/reserve',
    component: Reserve,
  },
  {
    path: '/asset',
    component: Asset,
  },
  {
    path: '/goods',
    component: Goods,
  },
  {
    path: '/order',
    component: OrderList,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/add/reserve',
    component: AddReserve,
  },
  {
    path: '/add/goods',
    component: AddGoods,
  },
  {
    path: '/test/one',
    component: TestTwo,
  },
  {
    path: '/test/two',
    component: TestTwo,
  },
  {
    path: '/test/form',
    component: TestForm,
  },
  {
    path: '/page15',
    component: Page15,
  },
];

export default routerConfig;
