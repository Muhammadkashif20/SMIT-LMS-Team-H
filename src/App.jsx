import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Teacher from "./pages/Teacher/Components/Teacher";
import Admin from "./pages/Admin/Components/Admin";
import Sidebar from "./pages/Teacher/Components/Sidebar";
import Student from "./pages/Student/Components/Student";
import Login from "./auth/Login";
const SidebarManage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return !isHomePage && <Sidebar />;
};
const App = () => {
  return (
    <div className="h-screen bg-[#F6F6F6]">
    <BrowserRouter>
      <SidebarManage />
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Student/*" element={<Student />}></Route>
        <Route path="/Teacher/*" element={<Teacher />}></Route>
        <Route path="/Admin/*" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
