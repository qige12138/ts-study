/*
 * @Author: your name
 * @Date: 2021-11-25 14:33:23
 * @LastEditTime: 2021-12-10 10:09:14
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /tsstudy/src/router/index.tsx
 */
import React, { useEffect } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import routes from './router';
import localStore from 'src/utils/localStore';

const App = () => {
  const element = useRoutes(routes);
  const userInfo = localStore.getLocalStorage('userInfo');
  const nav = useNavigate();
  useEffect(() => {
    userInfo ? nav('/') : nav('/login');
  }, []);
  return <>{element}</>;
};

export default App;
