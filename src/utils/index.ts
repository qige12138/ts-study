/*
 * @Author: your name
 * @Date: 2022-03-28 16:57:19
 * @LastEditTime: 2022-03-28 17:00:10
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ts-study/src/utils/index.ts
 */
import qs from 'qs';
import { useLocation } from 'react-router-dom';

/**
 * 获取当前url传参
 */
export function getUrlQuery(): Record<string, unknown> {
  return qs.parse(useLocation().search.replace(/^\?/, ''));
}
