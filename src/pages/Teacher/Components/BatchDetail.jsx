import React, { useContext } from "react";
import { sideBarContext } from "../../../Context/SidebarContext";
import { useParams } from "react-router-dom";
import { batches } from "./BatchManage";
import { Result } from "antd";
const batchDetail = () => {
  const { collapsed } = useContext(sideBarContext);
  const { id } = useParams();
    console.log("idParam=>",id);
  const batchIdFind=batches.find((data)=>data.id === parseInt(id))
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
    <div className={` ${!collapsed ? "mx-72" : "mx-32"} h-screen bg-[#F6F6F6]`}>
      <h1 className="font-semibold text-2xl">{batchIdFind.name}</h1>
    </div>  
  );
};

export default batchDetail;
