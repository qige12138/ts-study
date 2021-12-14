import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.less';
import Nav from 'src/component/nav/Nav';
import Header from 'src/component/header/Header';
import { Layout } from 'antd';
export default function Index() {
  return (
    <Layout className="page-layout">
      <Header />
      <Layout>
        <Nav />
        <Layout.Content className="layout-content">
          <div className="page">
            <Outlet />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
