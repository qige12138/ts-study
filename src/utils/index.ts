import qs from 'qs';
import { useLocation } from 'react-router-dom';

/**
 * 获取当前url传参
 */
export function getUrlQuery(): any {
  return qs.parse(useLocation().search.replace(/^\?/, ''));
}
