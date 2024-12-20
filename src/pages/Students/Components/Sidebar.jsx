import React from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  HistoryOutlined,
  SettingOutlined,
  StarOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{
          background: "#f5f5f5", // Background white
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
          SMIT LMS
        </div>
        <Menu
          theme="light"
          mode="inline"
          style={{
            background: "#f5f5f5",
          }}
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Playground
          </Menu.Item>

          {/* Dropdown for History */}
          <SubMenu
            key="sub1"
            icon={<HistoryOutlined />}
            title="History"
            style={{ color: "black" }}
          >
            <Menu.Item key="2-1">Activity Log</Menu.Item>
            <Menu.Item key="2-2">Audit Trail</Menu.Item>
          </SubMenu>

          {/* Dropdown for Starred */}
          <SubMenu
            key="sub2"
            icon={<StarOutlined />}
            title="Starred"
            style={{ color: "black" }}
          >
            <Menu.Item key="3-1">Favorites</Menu.Item>
            <Menu.Item key="3-2">Important</Menu.Item>
          </SubMenu>

          <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            Documentation
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
