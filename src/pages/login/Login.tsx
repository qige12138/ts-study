import React, { useEffect } from 'react';
import './login.less';
import { Input, Button, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import localStore from 'src/utils/localStore';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const nav = useNavigate();
  const onLogin = (val) => {
    localStore.setLocalStorage('userInfo', val);
    nav('/');
  };
  useEffect(() => {
    localStore.removeLocalStorage();
  }, []);
  return (
    <div className="page-login">
      <div className="login-content">
        <Form
          name="basic"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          onFinish={onLogin}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input type={'password'} prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item className="login-btn">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
