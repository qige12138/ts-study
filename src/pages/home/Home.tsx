/*
 * @Author: your name
 * @Date: 2021-11-25 14:47:55
 * @LastEditTime: 2021-12-13 15:50:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /tsstudy/src/pages/home/Home.tsx
 */
import React from 'react';

function Child() {
  console.log('Child');
  return <div>Child</div>;
}

function Father(props) {
  const [num, setNum] = React.useState(0);
  return (
    <div
      onClick={() => {
        setNum(num + 1);
      }}
    >
      {num}
      <Child />
    </div>
  );
}
export default function Home() {
  return (
    <div>
      <Father></Father>
    </div>
  );
}
