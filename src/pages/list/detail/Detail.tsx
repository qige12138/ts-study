import React from 'react';
import { getUrlQuery } from 'src/utils';

export default function Detail() {
  const id = getUrlQuery().id;
  return <div>详情:id-{id}</div>;
}
