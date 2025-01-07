import React from "react";
import { Card, List, Typography } from "antd";

const { Title, Text } = Typography;

const Announcement = () => {
  const announcements = [
    {
      id: 1,
      title: "Class Timing Update",
      description:
        "The class timing has been changed to 10:00 AM starting from next Monday.",
      date: "January 5, 2025",
    },
    {
      id: 2,
      title: "Assignment Submission Reminder",
      description:
        "Please submit your assignments by this Friday. Late submissions will not be accepted.",
      date: "January 7, 2025",
    },
    {
      id: 3,
      title: "Workshop on React Basics",
      description:
        "A workshop on React basics will be conducted this Saturday at 2:00 PM in the lab.",
      date: "January 10, 2025",
    },
  ];

  return (
    <div className={`p-6 bg-[#F6F6F6] min-h-screen mx-32`}>
      {/* Page Title */}
      <Title level={2} style={{ marginBottom: "20px" }}>
        Announcements
      </Title>

      {/* Announcements List */}
      <List
        itemLayout="vertical"
        dataSource={announcements}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              style={{
                marginBottom: "20px",
                borderRadius: "10px",
                background: "#fff",
              }}
            >
              <Title level={4}>{item.title}</Title>
              <Text style={{ display: "block", marginBottom: "10px" }}>
                {item.description}
              </Text>
              <Text type="secondary">{item.date}</Text>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Announcement;
