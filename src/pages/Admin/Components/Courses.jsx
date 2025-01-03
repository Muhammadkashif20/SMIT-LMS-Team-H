import React, { useContext } from "react";
import { Card } from "antd";
import WebDev from "../../../../src/image/webdev2.jpeg";
import {
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  CalendarOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { sideBarContext } from "../../../Context/SidebarContext";
const Courses = () => {
  const { collapsed } = useContext(sideBarContext);

  return (
    <div
      className={`my-5 ${
        !collapsed ? "mx-72" : "mx-32"
      } overflow-hidden h-screen bg-[#F6F6F6]`}
    >
      <h1 className="font-semibold text-2xl">Enrolled Course!</h1>
      <Card className="w-[380px] mt-8 overflow-hidden shadow-md rounded-lg hover:shadow-lg transition-shadow">
        <img
          src={WebDev}
          alt="Web Development Bootcamp"
          className="w-full mb-4 h-[200px] object-cover rounded-md"
        />
        <h1 className="font-semibold text-[1.4rem] text-gray-800 mb-2 text-left w-full">
          Web & App Development
        </h1>
        <p className="text-gray-500 text-[0.9rem] font-bold mb-4 text-left w-full">
          Duration: 1 Year
        </p>
        <div className="text-gray-700 text-sm">
          <div className="grid grid-cols-2 gap-y-2">
            <div className="flex items-center">
              <UserOutlined className="mr-2 text-gray-600" />
              <span>Muhammad Kashif</span>
            </div>
            <div className="flex items-center">
              <MailOutlined className="mr-2 text-gray-600" />
              <span>kashif213@gmail.com</span>
            </div>
            <div className="flex items-center">
              <IdcardOutlined className="mr-2 text-gray-600" />
              <span>Roll Number: 247762</span>
            </div>
            <div className="flex items-center">
              <CalendarOutlined className="mr-2 text-gray-600" />
              <span>Batch: 11</span>
            </div>
            <div className="flex items-center">
              <HomeOutlined className="mr-2 text-gray-600" />
              <span>Campus: SMIT Gulshan </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Courses;