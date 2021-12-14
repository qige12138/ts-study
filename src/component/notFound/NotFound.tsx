import React from 'react';
import { Button } from 'antd';

interface NotFoundProps {
  text?: string;
  type?: string;
}
export default function NotFound(props: NotFoundProps) {
  const { text = '找不到页面', type } = props;
  return (
    <div>
      {type === 'fail' && (
        <Button onClick={() => location.reload()}>刷新</Button>
      )}
      {text}
    </div>
  );
}
