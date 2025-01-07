import React, { useContext, useState } from "react";
import { Table, Button, Typography, message, Modal, Form, Input } from "antd";
const { Title, Text } = Typography;

const AssignmentManage = () => {
  const [modal, setModal] = useState(false);
  const [assignment,setAssignment]=useState("")
  const [assignmentDes,SetAssignmentDes]=useState("")
  const [file,setFile]=useState("")
  const [dueDate,setdueDate]=useState("")
  const [messageApi, contextHolder] = message.useMessage();
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      title: "React Basics",
      description: "Introduction to React components and state management.",
      dueDate: "2025-01-15",
      file: "react_basics.pdf",
    },
    {
      key: "2",
      title: "Advanced CSS",
      description: "Learn advanced CSS techniques and responsive design.",
      dueDate: "2025-01-20",
      file: "advanced_css.zip",
    },
  ]);
  function handleOpenModal() {
    setModal(true) 
  }
  function handleSubmitModal() {
    console.log("course=>",assignment);
    console.log("courseDescription",assignmentDes);
    console.log("courseDescription",File);
    console.log("courseDescription",dueDate);
    const newAssignments={
      key:`${dataSource.length+1}`,
      title:assignment,
      description:assignmentDes,
      dueDate:dueDate,
      file:file,
    }
      setDataSource([...dataSource,newAssignments])
    messageApi.open({
      type: 'success',
      content: 'Your Assignment is Submited Successfully!',
    }); 
    setModal(false)
  }

  return (
    <div
      className={`
       mx-32
       min-h-screen overflow-x-hidden  bg-[#F6F6F6] p-5`}
    >
      <h1 className="font-semibold text-[#333] text-2xl my-4">Create Assignments!</h1>
      <Button type="primary" onClick={handleOpenModal}>
        Create Assignments
      </Button>
      <div >
      <Table 
        style={{ width: "100rem" }}
        className="mt-4"
        dataSource={dataSource}
        columns={[
          {
            title: "Assignment Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Description",
            dataIndex: "description", 
            key: "description",
          },
          {
            title: "Due Date",
            dataIndex: "dueDate", 
            key: "dueDate",
          },
          {
            title: "Uploaded File",
            dataIndex: "file",
            key: "file",
          },
        ]}
        />
        </div>
      <Modal
        title="Create Assignment"
        open={modal}
        onCancel={()=>setModal(false)}
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item label="Assignment Title">
            <Input value={assignment} placeholder="Enter assignment title" onChange={(e)=>setAssignment(e.target.value)}/>
          </Form.Item>

          <Form.Item label="Description">
            <Input.TextArea value={assignmentDes} placeholder="Enter assignment description" onChange={(e)=>SetAssignmentDes(e.target.value)}/>
          </Form.Item>

          <Form.Item label="Due Date">
            <Input value={dueDate} type="date" onChange={(e)=>setdueDate(e.target.value)}/>
          </Form.Item>

          <Form.Item label="Upload File">
            <Input value={file} type="file" onChange={(e)=>setFile(e.target.value)}/>
          </Form.Item>

          {/* Submit Button */}
          <Button onClick={handleSubmitModal} type="primary" className="w-full">
            Create Assignment
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AssignmentManage;
