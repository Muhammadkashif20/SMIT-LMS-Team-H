import React, { useContext } from "react";
import { Layout, Menu, Button } from "antd";
import sideLogo from "../src/image/SMIT.png";

import {
  AppstoreOutlined,
  FileSearchOutlined,
  BookOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { sideBarContext } from "../src/Context/SidebarContext";

const { Sider } = Layout;

const Sidebar = () => {
  const { collapsed, setCollapsed } = useContext(sideBarContext);
  const menuItems = [
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: <Link to="/Students/Dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <FileSearchOutlined />,
      label: <Link to="/Students/Assignments">Assignments</Link>,
    },
    {
      key: "3",
      icon: <BookOutlined />,
      label: <Link to="/Students/Courses">Courses</Link>,
    },
    {
      key: "5",
      icon: <MessageOutlined />,
      label: <Link to="/Students/Messages">Messages</Link>,
    },
    {
      key: "6",
      icon: <UserOutlined />,
      label: <Link to="/Students/Profile">Profile</Link>,
    },
  ];

  return (
    <Layout>
      <Sider
        className="sidebar"
        width={230}
        collapsed={collapsed}
        style={{
          background: "#FFFFFF",
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div
          style={{
            color: "black",
            padding:"16px",
            marginLeft:"60px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "1px solid #ddd",
            marginBottom: "10px",
          }}
        >
            {!collapsed && (
              <img src={sideLogo} className="mx-24" alt="Logo" width={70} />
            )}
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{
            background: "#FFFFFF",
          }}
          items={menuItems}
        />
        <Button
          type="primary"
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: "absolute",
            bottom: "20px",
            left: collapsed ? "18px" : "60px",
            width: collapsed ? "40px" : "100px",
            transition: "all 0.3s",
          }}
        >
          {collapsed ? ">" : "< Collapse"}
        </Button>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
