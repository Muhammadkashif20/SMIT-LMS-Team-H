import React, { useContext, useState } from "react";
import { sideBarContext } from "../../../Context/SidebarContext";
import { Button, Modal, Form, Input, Table } from "antd";

const CoursesManage = () => {
  const { collapsed } = useContext(sideBarContext);
  const [modal,setModal]=useState(false)
  function handleModelOpen() {
    setModal(true)
  }
  return (
    <div className={` ${!collapsed ? "mx-72" : "mx-32"} h-screen bg-[#F6F6F6] p-4`}>
      <h1 className="font-semibold text-2xl mb-4">Courses Management</h1>
      <Button type="primary" onClick={handleModelOpen}>Create Course</Button>
      <Table
        className="mt-4"
        dataSource={[]}
        columns={[
          {
            title: "Course Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Description",
            dataIndex: "description",
            key: "description",
          },
        ]}
      />
      <Modal title="Create Course" open={false} footer={null}>
        <Form layout="vertical">
          <Form.Item label="Course Name">
            <Input placeholder="Enter course name" />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea placeholder="Enter course description" />
          </Form.Item>
          <Button type="primary" className="w-full">
            Add Course
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default CoursesManage;
