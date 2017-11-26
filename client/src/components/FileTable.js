import React from 'react'
import { Table } from 'antd'
import moment from 'moment'

const tableColumns = [
  {
    title: '文件名',
    dataIndex: 'Key',
    render: (text) => {
      return <span>{text}</span>
    }
  },
  {
    title: '上传时间',
    dataIndex: 'LastModified',
    render: (text) => {
      return <span>{moment(text).format('YYYY-MM-DD kk:mm:ss')}</span>
    }
  }
]
export default ({ onlyFiles }) => (
  <div>
    <Table columns={tableColumns}
      dataSource={onlyFiles}
      rowKey={item => item.ETag}
      pagination={false}
      />
  </div>
)