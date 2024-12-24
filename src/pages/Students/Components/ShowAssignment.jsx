import { Button, Table } from "antd";
import React,{useState} from 'react';
import SubmitAssignment from "./SubmitAssignment";
const ShowAssignment = () => {
      const [visibleModal, setVisibleModal] = useState(false);   
  const dataSource = [
      {
        key: "1",
        name: "New Assignment: Dynamic Routing Using Dummy JSON API",
      },
      {
        key: "2",
        name: "New Assignment: Create Todo App Using useState and Components",
      },
      {
        key: "3",
        name: "New Assignment: Build a Blog Using React and Firebase",
      },
      {
        key: "4",
        name: "New Assignment: Create a Responsive Portfolio Website",
      },
      {
        key: "5",
        name: "New Assignment: Develop a Weather App Using React",
      },
    ];

  const columns = [
    {
      title: "Assignments!",
      dataIndex: "name",
      key: "name",
    },
    {
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button type="primary">View</Button>
          <Button type="default" onClick={()=>setVisibleModal(true)}>Submit</Button>
        </div>
      ),
    },
  ];
  return (
    <div className="mx-72  my-6 ">
      <h1 className=" font-semibold text-2xl">View Assignments!</h1>
      <Table className="my-6 "  dataSource={dataSource} columns={columns} pagination={false} />
      <SubmitAssignment visibleModal={visibleModal} setVisibleModal={setVisibleModal}/>
      </div>
  );
};
export default ShowAssignment;




