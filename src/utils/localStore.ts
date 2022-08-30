/*
 * @Author: your name
 * @Date: 2021-12-10 11:11:10
 * @LastEditTime: 2022-04-20 15:01:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /tsstudy/src/utils/localStore.ts
 */
import { Base64 } from 'js-base64';

const localStore = {
  /**
   * 设置本地存储
   * @param key String
   * @param val any
   */
  setLocalStorage(key: string, val: unknown) {
    if (!key) return null;
    const keyCode = Base64.encode(key);
    const valCode = Base64.encode(JSON.stringify(val));
    localStorage.setItem(keyCode, valCode);
  },
  /**
   * 获取本地存储
   * @param key
   * @returns
   */
  getLocalStorage(key: string): unknown {
    if (!key) return null;
    const keyCode = Base64.encode(key);
    const valCode = localStorage.getItem(keyCode);
    return valCode ? JSON.parse(Base64.decode(valCode)) : null;
  },
  /**
   * 移除本地存储
   * @param key 不传时移除所有
   */
  removeLocalStorage(key?: string) {
    if (key) {
      /* 删除具体某一个storage */
      const keyCode = Base64.encode(key);
      localStorage.removeItem(keyCode);
    } else {
      /* 删除全部 */
      Object.keys(localStorage).map((v) => {
        localStorage.removeItem(v);
      });
    }
  }
};

export default localStore;
