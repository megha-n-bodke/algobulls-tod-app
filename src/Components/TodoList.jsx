import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
const TodoList = () => {
    //columns
    const [columns, setColumns]= useState([{
        title:"ID",
        dataIndex:"id"
    },
    {
        title:"Title",
        dataIndex:"Title"
    }
])

    //dataset
    const[dataSource, setDataSource] = useState([]);

    //useEffect
    useEffect(() => {
        fetch('http://localhost:9000/todos')
        .then(res => res.json())
        .then((result)=>{
            setDataSource(result);
        });
    }, [])
    
  return (
    <div>TodoList
        <Table columns={columns} dataSource={dataSource}></Table>
    </div>
  )
}

export default TodoList