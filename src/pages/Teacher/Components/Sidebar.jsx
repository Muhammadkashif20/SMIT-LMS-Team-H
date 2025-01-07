import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import sideLogo from "../../../image/SMIT.png";
import {
  HomeOutlined,
  FileAddOutlined,
  CommentOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true); // Initial collapsed state

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <Link to="/Teacher/Dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <FileAddOutlined />,
      label: <Link to="/Teacher/AssignmentManage">Assignments</Link>,
    },
    {
      key: "3",
      icon: <CommentOutlined />,
      label: <Link to="/Teacher/Announcement">Announcement</Link>,
    },
    {
      key: "4",
      icon: <BookOutlined />,
      label: <Link to="/Teacher/BatchManage">Batches</Link>,
    },
    {
      key: "5",
      icon: <TeamOutlined />,
      label: <Link to="/Teacher/TrackingStudent">Tracking Student</Link>,
    },
    {
      key: "6",
      icon: <UserOutlined />,
      label: <Link to="/Teacher/Profile">Profile</Link>,
    },
  ];

  return (
    <Layout >
      <Sider
        className="sidebar"
        width={collapsed ? 50 : 230} // Conditionally set width based on collapse state
        collapsed={collapsed}
        style={{
          background: "#FFFFFF",
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          transition: "width 0.3s ease", // Smooth transition for width change
          zIndex: 999, // Make sure sidebar is on top
        }}
      >
        <div
          style={{
            color: "black",
            padding: "8px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "1px solid #ddd",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={sideLogo}
              alt="Logo"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
                display: collapsed ? "none" : "block", // Hide logo when collapsed
              }}
            />
          </div>
        </div>

        <Menu
          theme="light"
          mode="inline"
          style={{
            background: "#FFFFFF",
            padding: "0 10px",
            marginTop: "20px", // Add some margin for spacing
          }}
        >
          {menuItems.map((item) =>
            item.children ? (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key} icon={child.icon}>
                    {child.label}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>

        <Button
          type="primary"
          onClick={() => setCollapsed(!collapsed)} // Toggle collapse
          style={{
            position: "absolute",
            bottom: "20px",
            left: collapsed ? "10px" : "60px", // Adjust button position based on collapse state
            width: collapsed ? "40px" : "100px", // Adjust button width based on collapse state
            transition: "all 0.3s ease", // Smooth transition for button position
            borderRadius: "5px",
          }}
        >
          {collapsed ? ">" : "<"} {/* Button to toggle collapse */}
        </Button>
      </Sider>

      {/* Add content section to ensure sidebar doesn't overlap */}
      <Layout style={{ marginLeft: collapsed ? "50px" : "230px", transition: "margin-left 0.3s ease" }}>
        {/* Your content goes here */}
      </Layout>
    </Layout>
  );
};

export default Sidebar;
