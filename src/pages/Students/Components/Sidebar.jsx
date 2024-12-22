import React from "react";
import { Layout, Menu } from "antd";
import sideLogo from "../../../../src/image/SMIT.png"
import {
  AppstoreOutlined,
  HistoryOutlined,
  SettingOutlined,
  FileTextOutlined,
  FileSearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Layout style={{ minHeight: "100vh",background: "#FFFFFF"}}>
      <Sider
          width={250}
        style={{
          background: "#FFFFFF", // Background white
          overflow: "auto", // Scrollable
          padding: "10px", // Margin inside sidebar
        }}
      >
        <div
          style={{
            color: "black",
            padding: "20px",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",
            borderBottom: "1px solid #ddd",
            marginBottom: "10px", // Space below the header
          }}
        >
          <img src={sideLogo} alt="" className="h-12 mx-12 mt-[-5vh]"/>
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{
            background: "#FFFFFF",
          }}
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
          <Link to="/Dashboard">
            Dashboard
          </Link>
          </Menu.Item>
          

          {/* Dropdown for History */}
          <SubMenu
            key="sub1"
            icon={<HistoryOutlined />}
            title="Assignments"
            style={{ color: "black" }}
          >
            <Menu.Item key="2-1" icon={<FileSearchOutlined/>}>Show Assignments</Menu.Item>
            <Menu.Item key="2-2" icon={<UploadOutlined/>}>Submit Assignments</Menu.Item>
          </SubMenu>
          
          <Menu.Item key="2" icon={<SettingOutlined />}>
            Courses
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Layout
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            Messages
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="6" icon={<FileTextOutlined />}>
            Progress
          </Menu.Item>
          <Menu.Item key="6" icon={<FileTextOutlined />}>
            Home
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
