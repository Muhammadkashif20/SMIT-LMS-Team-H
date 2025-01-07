import React from "react";
import { useParams } from "react-router-dom";
import { batches } from "./BatchManage";
import { Result } from "antd";
import { Menu } from "antd";
import banner from "../../../image/teacher assignment banner.jpg";

const BatchDetail = () => {
  const { id } = useParams();
  console.log("idParam=>", id);
  const batchIdFind = batches.find((data) => data.id == parseInt(id));
  if (!batchIdFind) {
    return (
      <Result
        status="404"
        className="h-screen bg-[#F6F6F6]"
        title="Batch Not Found"
        subTitle="Sorry, the Batch you're looking for doesn't exist."
      />
    );
  }
  return (
    <div className={` mx-32 h-screen bg-[#F6F6F6]`}>
      <div className="overflow-hidden">
        <Menu
          className="w-[140%] "
          mode="horizontal"
          theme="light"
          style={{
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            padding: "0 40px",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          <Menu.Item key="stream">Stream</Menu.Item>
          <Menu.Item key="classwork">Classwork</Menu.Item>
          <Menu.Item key="people">People</Menu.Item>
          <Menu.Item key="grades">Grades</Menu.Item>
        </Menu>
      </div>
      <div className="">
        <img src={banner} alt="banner" className="w- h-[200px] mt-5 " />
        <div className="relative bottom-20 text-white mx-10">
          <h1 className="font-semibold text-2xl">{batchIdFind.name}</h1>
          <h2 className="font-semibold text-1xl">{batchIdFind.batch}</h2>
        </div>
      </div>
    </div>
  );
};

export default BatchDetail;
