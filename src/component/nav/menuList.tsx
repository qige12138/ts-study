import React, { ReactNode } from 'react';
import { HomeOutlined } from '@ant-design/icons';

interface MenuProps {
  title: string;
  key: number;
  path?: string;
  icon?: ReactNode;
  children?: MenuProps[];
}

const menuList: MenuProps[] = [
  {
    title: '首页',
    path: '/',
    key: 1,
    icon: <HomeOutlined />
  },
  {
    title: '列表',
    key: 2,
    icon: <HomeOutlined />,
    children: [
      {
        title: '列表1',
        path: '/list',
        key: 21
      }
    ]
  }
];

export default menuList;
