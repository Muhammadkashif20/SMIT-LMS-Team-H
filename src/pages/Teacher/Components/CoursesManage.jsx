import React, { useContext, useState } from "react";
import { sideBarContext } from "../../../Context/SidebarContext";
import { Button, Modal, Form, Input, Table, Typography } from "antd";

const CoursesManage = () => {
  const { collapsed } = useContext(sideBarContext);
  return (
    <div
      className={` ${!collapsed ? "mx-72" : "mx-32"} h-screen bg-[#F6F6F6] p-4`}
    >
       <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Title level={2} style={{ color: "#333" }}>
          Course Management
        </Title>
        <Text style={{ color: "#595959", fontSize: "16px" }}>
          Manage all aspects of your Courses in one place.
        </Text>
      </div>
      <h1 className="font-semibold text-[#333] text-2xl my-4">Create Courses!</h1>
      <Button type="primary" onClick={handleOpenModal}>
        Create Course
      </Button>
      <Table
        className="mt-4"
        dataSource={[]}
        columns={[
          {
            title: "Batch Name",
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
    
    </div>
  );
};

export default CoursesManage;
