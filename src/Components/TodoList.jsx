import React, { useState } from 'react';
import { Table } from 'antd';
const TodoList = () => {
    const [columns, setColumns]= useState({
        title:"Title",
    },)
  return (
    <div>TodoList
        <Table columns={columns}></Table>
    </div>
  )
}

export default TodoList