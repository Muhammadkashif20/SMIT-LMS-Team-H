import React from "react";
import { sideBarContext } from "../../../Context/SidebarContext";
const AssignmentManage = () => {
  const { collapsed } = useContext(sideBarContext);
  return (
    <div className={` ${!collapsed ? "mx-72" : "mx-32"} h-screen bg-[#F6F6F6]`}>
      <h1 className="font-semibold text-2xl">AssignmentManagement</h1>
    </div>
  );
};

export default AssignmentManage;
