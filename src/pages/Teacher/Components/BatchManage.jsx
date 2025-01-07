import React from "react";
import { Typography, Card, Row, Col } from "antd";
import {
  UsergroupAddOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const batches = [
  {
    id: 1,
    key: "1",
    batch: "Batch 11",
    name: "MERN Stack Development",
    students: 25,
    days: "MWF",
    timing: "10:00 AM - 12:00 PM",
  },
  {
    id: 2,
    key: "2",
    batch: "Batch 12",
    name: "Frontend Development",
    students: 30,
    days: "TTS",
    timing: "2:00 PM - 4:00 PM",
  },
  {
    id: 3,
    key: "3",
    batch: "Batch 11",
    name: "Backend Development",
    students: 30,
    days: "MWF",
    timing: "7:00 PM - 9:00 PM",
  },
  {
    id: 4,
    key: "4",
    batch: "Batch 13",
    name: "App Development",
    students: 20,
    days: "MWF",
    timing: "9:00 AM - 11:00 AM",
  },
  {
    id: 5,
    key: "5",
    batch: "Batch 12",
    name: "Javascript Development",
    students: 35,
    days: "TTS",
    timing: "11:00 AM - 1:00 PM",
  },
];

const { Title, Text } = Typography;

const BatchManage = () => {
  const navigate = useNavigate();

  function handleViewBatch(id) {
    console.log("id=>", id);
    navigate(`/Teacher/BatchManage/${id}`);
  }

  return (
    <div className={`mx-32 min-h-screen bg-[#F6F6F6] p-4`}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Title level={2} style={{ color: "#333" }}>
          Batch Management
        </Title>
        <Text style={{ color: "#595959", fontSize: "16px" }}>
          Manage all aspects of your Batches in one place.
        </Text>
      </div>
      <div className="my-10">
        <Row gutter={[330]}>
          {batches.map((batch) => (
            <Col xs={24} sm={12} md={8} lg={6} key={batch.id}>
              <Card
                onClick={() => handleViewBatch(batch.id)}
                className="mb-5"
                style={{ width: "300px", padding: "10px" }}
                hoverable
                title={batch.name}
              >
                <p>
                  <UsergroupAddOutlined style={{ marginRight: 8 }} />
                  {batch.students} Students
                </p>
                <p>
                  <CalendarOutlined style={{ marginRight: 8 }} />
                  Days: {batch.days}
                </p>
                <p>
                  <CalendarOutlined style={{ marginRight: 8 }} />
                  {batch.batch}
                </p>
                <p>
                  <ClockCircleOutlined style={{ marginRight: 8 }} />
                  Timing: {batch.timing}
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BatchManage;
