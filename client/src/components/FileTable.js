import React from 'react'
import { Table, Button } from 'antd'
import moment from 'moment'

const tableColumns = [
  {
    title: '文件名',
    dataIndex: 'Key',
    render: (text) => {
      return <span>{text.split('/')[1]}</span>
    }
  },
  {
    title: '上传时间',
    dataIndex: 'LastModified',
    render: (text) => {
      return <span>{moment(text).format('YYYY-MM-DD kk:mm:ss')}</span>
    }
  },
    {
    title: '操作',
    render: record => {
      return (
        <Button>
         删除
        </Button>
     )
    }
  }
]
export default ({ currentDirFiles }) => (
  <div>
    <Table columns={tableColumns}
      dataSource={currentDirFiles}
      rowKey={item => item.ETag}
      pagination={false}
      />
  </div>
)