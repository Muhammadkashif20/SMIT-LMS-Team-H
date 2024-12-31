import React from "react";
import { createContext,useState } from "react";
export const sideBarContext = createContext();
 const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <sideBarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </sideBarContext.Provider>
  );
};
export default SidebarProvider;
