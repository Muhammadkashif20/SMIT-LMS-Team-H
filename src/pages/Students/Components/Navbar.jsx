import React from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{
          background: "#f5f5f5", // Dark blue background
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
         Learning-Management-System
        </div>

        {/* Navigation Links */}
        <Menu
          theme="black"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            background: "transparent", // Transparent to blend with Header
            borderBottom: "none",
          }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>

        {/* Dropdown */}
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            type="text"
            style={{ color: "black", fontSize: "16px" }}
            icon={<DownOutlined />}
          >
            Account
          </Button>
        </Dropdown>
      </Header>
    </Layout>
  );
};

export default Navbar;
