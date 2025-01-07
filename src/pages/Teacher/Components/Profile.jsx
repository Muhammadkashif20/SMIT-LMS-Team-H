import React from "react";
import { Typography, Button } from "antd";
import { PhoneOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons";
import banner from "../../../image/SMIT.png";

const { Title, Text } = Typography;

const Profile = () => {
  return (
    <div
      className={`flex-1 min-h-screen bg-[#F6F6F6] overflow-x-hidden p-6 mx-32`}
      style={{ marginBottom: "-8px" }}
    >
      {/* Banner Section */}
      <div
        className="bg-gray-50"
        style={{
          height: "200px",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          position: "relative",
        }}
      >
        <img src={banner} alt="banner" className="w-48 pt-5 mx-96" />
      </div>

      {/* Profile Image */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "5px solid white",
          overflow: "hidden",
          position: "absolute",
          top: "180px",
          left: "20%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/26040872?v=4"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* White Background Section */}
      <div
        style={{
          background: "white",
          padding: "10px 30px",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        {/* Name and Designation */}
        <div className="mx-36 mb-10">
          <Title level={3} style={{ color: "#000", margin: 0 }}>
            Sir Bilal Raza
          </Title>
          <Text style={{ color: "gray", fontSize: "16px" }}>
            SMIT Web & App Teacher
          </Text>
        </div>
      </div>

      {/* Bio Section */}
      <div
        style={{
          background: "white",
          padding: "10px 30px",
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <Title level={4} style={{ color: "#000" }}>
            About Me
          </Title>
          <Text className="text-gray-600 text-base leading-relaxed block">
            Passionate about teaching and helping students achieve their full
            potential through personalized learning. Focused on creating a
            positive and engaging classroom environment.
          </Text>
        </div>

        {/* Contact Information */}
        <div style={{ marginTop: "20px" }}>
          <Title level={4} style={{ color: "#000" }}>
            Contact Information
          </Title>
          <div className="flex flex-col gap-1">
            <Button
              type="link"
              icon={<MailOutlined />}
              style={{
                color: "#4facfe",
                fontSize: "16px",
                textAlign: "left",
                padding: "0",
                justifyContent: "flex-start",
              }}
            >
              codeaurbilal@gmail.com
            </Button>
            <Button
              type="link"
              icon={<PhoneOutlined />}
              style={{
                color: "#4facfe",
                fontSize: "16px",
                justifyContent: "flex-start",
                textAlign: "left",
                padding: "0",
              }}
            >
              +123 456 789
            </Button>
            <Button
              type="link"
              icon={<LinkedinOutlined />}
              style={{
                color: "#4facfe",
                fontSize: "16px",
                justifyContent: "flex-start",
                textAlign: "left",
                padding: "0",
              }}
            >
              linkedin.com/in/codeaurbilal
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
