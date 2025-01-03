
import React, { useContext } from "react";
import { sideBarContext } from "../../../Context/SidebarContext";

const Messages = () => {
  const { collapsed } = useContext(sideBarContext);
  return (
    <div
      className={` ${!collapsed ? "mx-72" : "mx-32"} h-screen bg-[#F6F6F6] `}
    >
      <h1 className="text-2xl font-semibold">Students Messages!</h1>
      {/* Admin Msg */}

      {/* Teacher Msg */}
    </div>
  );
};

export default Messages;
