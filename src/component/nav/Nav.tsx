import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import menuList from './menuList';
import routes from 'src/router/router';
import './nav.less';

export default function Nav() {
  //选中的菜单
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  //打开的一级菜单
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const { pathname } = useLocation();

  /**
   * 初始化选择的菜单和打开的一级菜单
   */
  const initNav = () => {
    let curPathname = pathname;
    /**
     * 查看是否是menuPath
     */
    for (const route of routes) {
      if (route.children?.length) {
        const routeChild = route.children.find((v) => v.path === curPathname);
        if (routeChild?.menuPath) {
          curPathname = routeChild.menuPath;
          break;
        }
      }
    }
    for (const menu of menuList) {
      //一级菜单
      if (curPathname === menu.path) {
        setSelectedKeys([`${menu.key}`]);
        break;
      }
      //二级菜单
      const child = menu.children?.find((v) => v.path === curPathname);
      if (child) {
        setSelectedKeys([`${child.key}`]);
        setOpenKeys([`${menu.key}`]);
        break;
      }
    }
  };

  const onOpenChange = (value: string[]) => {
    setOpenKeys(value);
  };

  useEffect(() => {
    initNav();
  }, [pathname]);

  return (
    <Layout.Sider className="page-sider">
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        {menuList.map((router) =>
          router.children?.length ? (
            <Menu.SubMenu
              key={router.key}
              title={router.title}
              icon={router.icon}
            >
              {router.children.map((child) => (
                <Menu.Item key={child.key}>
                  <Link to={child.path}>
                    <span>{child.title}</span>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={router.key} icon={router.icon}>
              <Link to={router.path}>
                <span>{router.title}</span>
              </Link>
            </Menu.Item>
          )
        )}
      </Menu>
    </Layout.Sider>
  );
}
