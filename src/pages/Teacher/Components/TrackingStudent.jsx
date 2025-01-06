import React, { useContext } from "react";
import { sideBarContext } from "../../../Context/SidebarContext";
import { Table, Tag, Typography } from "antd";

const { Title } = Typography;

const TrackingStudent = () => {
  const { collapsed } = useContext(sideBarContext);

  // Sample data for students
  const data = [
    {
      key: "1",
      name: "Ali Khan",
      attendance: "80%",
      progress: "Good",
      status: ["Active"],
    },
    {
      key: "2",
      name: "Ayesha Malik",
      attendance: "60%",
      progress: "Average",
      status: ["Inactive"],
    },
    {
      key: "3",
      name: "Bilal Ahmed",
      attendance: "95%",
      progress: "Excellent",
      status: ["Active"],
    },
  ];

  // Table columns
  const columns = [
    {
      title: "Student Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Attendance",
      dataIndex: "attendance",
      key: "attendance",
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          {status.map((tag) => {
            let color = tag === "Active" ? "green" : "volcano";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <div
      className={`p-6 bg-[#F6F6F6] min-h-screen ${
        !collapsed ? "ml-56" : "ml-20"
      }`}
    >
      {/* Page Title */}
      <Title level={2} style={{ marginBottom: "20px" }}>
        Tracking Students
      </Title>

      {/* Student Table */}
      <Table
        columns={columns}
        dataSource={data}
        bordered
        style={{ background: "#fff", borderRadius: "10px" }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default TrackingStudent;
