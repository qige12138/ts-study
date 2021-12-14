import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

export default function List1() {
  return (
    <Table
      dataSource={[{ id: 1, name: 'XXX' }]}
      rowKey="id"
      columns={[
        {
          title: 'id',
          dataIndex: 'id'
        },
        {
          title: 'name',
          dataIndex: 'name',
          render(_, item) {
            return <Link to={`/detail?id=${item.id}`}>{item.name}</Link>;
          }
        }
      ]}
    />
  );
}
