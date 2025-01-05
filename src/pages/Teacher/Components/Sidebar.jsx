import React, { useContext } from "react";
import { Layout, Menu, Button } from "antd";
import sideLogo from "../../../image/SMIT.png";

import {
  HomeOutlined,
  FileAddOutlined,
  MessageOutlined,
  NotificationOutlined,
  CommentOutlined,
  BookOutlined,
  TeamOutlined,
  UserOutlined,
  EditOutlined ,
  LineChartOutlined ,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { sideBarContext } from "../../../Context/SidebarContext";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const { collapsed, setCollapsed } = useContext(sideBarContext);

  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <Link to="/Teacher/Dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <FileAddOutlined />,
      label:<Link to="/Teacher/AssignmentManage">Assignments</Link>,

    },
    {
      key: "3",
      icon: <CommentOutlined />,
      label: <Link to="/Teacher/Communication">Communication</Link>,
    },
    {
      key: "4",
      icon: <BookOutlined />,
      label: <Link to="/Teacher/CoursesManage">Courses</Link>,
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
          transition: "width 0.3s ease",
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
            {!collapsed && (
              <img
                src={sideLogo}
                alt="Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
        </div>

        <Menu
          theme="light"
          mode="inline"
          style={{
            background: "#FFFFFF",
            padding: "0 10px",
          }}
        >
          {menuItems.map((item) =>
            item.children ? (
              <SubMenu
                key={item.key}
                icon={item.icon}
                title={item.label}
              >
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
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: "absolute",
            bottom: "20px",
            left: collapsed ? "18px" : "60px",
            width: collapsed ? "40px" : "100px",
            transition: "all 0.3s ease",
            borderRadius: "5px",
          }}
        >
          {collapsed ? ">" : "Collapse"}
        </Button>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
