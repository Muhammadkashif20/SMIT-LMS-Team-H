import React, { useContext } from "react";
import { sideBarContext } from "../../../Context/SidebarContext";
import { Card, Row, Col, Button, Typography, Space } from "antd";
import {
  EditOutlined,
  CheckCircleOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const AssignmentManage = () => {
  const { collapsed } = useContext(sideBarContext);

  const sections = [
    {
      title: "Create Assignments",
      icon: <EditOutlined style={{ fontSize: "36px", color: "#1890ff" }} />,
      description: "Easily design and publish assignments for your students.",
      buttonText: "Create Now",
    },
    {
      title: "Review Submissions",
      icon: (
        <CheckCircleOutlined style={{ fontSize: "36px", color: "#52c41a" }} />
      ),
      description: "Review and provide constructive feedback on submissions.",
      buttonText: "Start Reviewing",
    },
    {
      title: "Track Assignment Progress",
      icon: (
        <LineChartOutlined style={{ fontSize: "36px", color: "#faad14" }} />
      ),
      description:
        "Monitor student progress and analyze performance trends over time.",
      buttonText: "Track Progress",
    },
  ];

  return (
    <div
      className={`${
        !collapsed ? "mx-72" : "mx-32"
      } h-screen bg-[#F6F6F6] p-5`}
    >
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Title level={2} style={{ color: "#333" }}>
          Assignment Management
        </Title>
        <Text style={{ color: "#595959", fontSize: "16px" }}>
          Manage all aspects of your assignments in one place.
        </Text>
      </div>

      {/* Cards Section */}
      <Row gutter={[24, 24]} justify="center">
        {sections.map((section, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              style={{
                width: "250px", // Card width
                margin: "0 auto", // Center card and add margin between them
                textAlign: "center",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                background: "#fff",
              }}
            >
              <Space direction="vertical" align="center" size="middle">
                <div>{section.icon}</div>
                <Title level={4}>{section.title}</Title>
                <Text style={{ color: "#595959" }}>{section.description}</Text>
                <Button type="primary" size="large">
                  {section.buttonText}
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Footer Section */}
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
          color: "#595959",
          fontSize: "14px",
        }}
      >
        <Text>
          Need help? Visit the <a href="http://localhost:5173">SMIT Portal</a> for more
          information.
        </Text>
      </div>
    </div>
  );
};

export default AssignmentManage;
