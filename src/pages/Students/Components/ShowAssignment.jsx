import { Button, Table } from "antd";
import React,{useState} from 'react';
import SubmitAssignment from "./SubmitAssignment";
import { useNavigate } from "react-router-dom";
const ShowAssignment = () => {
      const [visibleModal, setVisibleModal] = useState(false);   
      const navigate=useNavigate()
  const dataSource = [
      {
        key: "1",
        id:1,
        name: "New Assignment: Dynamic Routing Using Dummy JSON API",
      },
      {
        key: "2",
        id:2,
        name: "New Assignment: Create Todo App Using useState and Components",
      },
      {
        key: "3",
        id:3,
        name: "New Assignment: Build a Blog Using React and Firebase",
      },
      {
        key: "4",
        id:4,
        name: "New Assignment: Create a Responsive Portfolio Website",
      },
      {
        key: "5",
        id:5,
        name: "New Assignment: Develop a Weather App Using React",
      },
    ];
    function handleViewAssignment(id) {
      navigate(`/Assignments/${id}`)
    }

  const columns = [
    {
      title: "Assignments!",
      dataIndex: "name",
      key: "name",
    },
    {
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button type="primary" onClick={()=>handleViewAssignment(record.id)}>View </Button>
          {/* <Button type="default" onClick={()=>setVisibleModal(true)}>Submit</Button> */}
          <Button type="dashed" onClick={()=>setVisibleModal(true)}>Edit</Button>
          <Button type="default" >Delete</Button>
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




