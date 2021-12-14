import React from 'react';

interface LoadProps {
  text?: string;
}

export default function Loading(props: LoadProps) {
  const { text = '资源加载中...' } = props;

  return <div>{text}</div>;
}
