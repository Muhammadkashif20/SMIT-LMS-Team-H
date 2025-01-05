  import React, { useContext } from "react";
  import { sideBarContext } from "../../../Context/SidebarContext";
  import { Typography, Button } from "antd";
  import { PhoneOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons";

  const { Title, Text } = Typography;

  const Profile = () => {
    const { collapsed } = useContext(sideBarContext);

    return (
      <div
        className={`flex-1 min-h-screen bg-[#F6F6F6] overflow-x-hidden p-8 ${
          !collapsed ? "ml-72" : "ml-32"
        }`}
        style={{ marginBottom: "-8px" }}
      >
        {/* Banner Section */}
        <div
          style={{
            background: "linear-gradient(to right, #4facfe, #00f2fe)",
            height: "200px",
            borderTopLeftRadius:"10px",
            borderTopRightRadius:"10px",
            position: "relative",
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "5px solid white",
              overflow: "hidden",
              position: "absolute",
              top: "155px",
              left: "10%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/26040872?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* White Background Section */}
        <div
          style={{
            background: "white",
            padding: "40px 20px",
            borderTopLeftRadius:"10px",
            borderTopRightRadius:"10px",
            borderBottomLeftRadius:"10px",
            borderBottomRightRadius:"10px",
            textAlign: "center",
          }}
        >
          {/* Name and Designation */}
          <div>
            <Title level={3} style={{ color: "#000", margin: 0 }}>
              Sir Bilal Raza
            </Title>
            <Text style={{ color: "gray", fontSize: "16px" }}>
              SMIT Web & App Teacher
            </Text>
          </div>

          {/* Bio Section */}
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
            <div className="flex flex-col gap-4">
              <Button
                type="link"
                icon={<MailOutlined />}
                style={{
                  color: "#4facfe",
                  fontSize: "16px",
                  textAlign: "left",
                  padding: "0",
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
