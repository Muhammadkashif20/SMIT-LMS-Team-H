import React from "react";
import { Layout, Menu } from "antd";
import sideLogo from "../../../../src/image/SMIT.png";
import {
  AppstoreOutlined,
  FileSearchOutlined,
  SettingOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const menuItems = [
    {
      key: "1",
      icon: <AppstoreOutlined />,
      label: <Link to="/Dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <FileSearchOutlined />,
      label: <Link to="/Assignments">Assignments</Link>,
    },
    {
      key: "3",
      icon: <SettingOutlined />,
      label: <Link to="/Courses">Courses</Link>,
    },
    {
      key: "4",
      icon: <SettingOutlined />,
      label: <Link to="/Layout">Layout</Link>,
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      label: <Link to="/Messages">Messages</Link>,
    },
    {
      key: "6",
      icon: <SettingOutlined />,
      label: <Link to="/Profile">Profile</Link>,
    },
    {
      key: "7",
      icon: <FileTextOutlined />,
      label: <Link to="/Progress">Progress</Link>,
    },
  ];

  return (
    <Layout>
      <Sider
        width={230}
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
            padding: "16px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "1px solid #ddd",
            marginBottom: "10px",
          }}
        >
          <img src={sideLogo} alt="" className="h-12 mx-12 mt-[-1vh]" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{
            background: "#FFFFFF",
          }}
          items={menuItems}
        />
      </Sider>
    </Layout>
  );
};

export default Sidebar;
