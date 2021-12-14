import { ReactElement } from 'react';
import AsyncComponent from 'src/component/asyncComponent/AsyncComponent';

interface RoutesProps {
  path?: string;
  name: string;
  element: ReactElement<unknown, any>;
  menuPath?: string;
  index?: boolean;
  children?: RoutesProps[];
}
const routes: RoutesProps[] = [
  {
    path: '/login',
    name: 'Login',
    element: AsyncComponent(() => import('src/pages/login/Login'))
  },
  {
    path: '*',
    name: 'notFound',
    element: AsyncComponent(() => import('src/component/notFound/NotFound'))
  },
  {
    path: '/',
    name: 'App',
    element: AsyncComponent(() => import('src/pages')),
    children: [
      {
        name: '首页',
        index: true,
        element: AsyncComponent(() => import('src/pages/home/Home'))
      },
      {
        path: '/list',
        name: '列表1',
        element: AsyncComponent(() => import('src/pages/list/list1/List1'))
      },
      {
        path: '/detail',
        name: '详情',
        menuPath: '/list',
        element: AsyncComponent(() => import('src/pages/list/detail/Detail'))
      }
    ]
  }
];

export default routes;
