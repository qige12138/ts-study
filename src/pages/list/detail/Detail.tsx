/*
 * @Author: your name
 * @Date: 2022-03-28 16:57:19
 * @LastEditTime: 2022-03-28 17:03:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts-study/src/pages/list/detail/Detail.tsx
 */
import React from 'react';
import { getUrlQuery } from 'src/utils';

export default function Detail() {
  const id = getUrlQuery().id;
  return <div>详情:id--{id}</div>;
}
