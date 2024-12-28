import React from "react";
import Sidebar from "./pages/Students/Components/Sidebar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Students/Components/Dashboard";
import Home from "./pages/Students/Components/Home";
import Courses from "./pages/Students/Components/Courses";
import Messages from "./pages/Students/Components/Messages";
import Profile from "./pages/Students/Components/Profile";
import Assignments from "./pages/Students/Components/ShowAssignment";
import AssignmentDetail from "./pages/Students/Components/AssignmentDetail";
import Login from "./pages/Students/Components/Login";
const SidebarManage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return !isHomePage && <Sidebar />;
};

const App = () => {
  return (
    <div className="bg-[#F6F6F6] h-full ">
      <BrowserRouter>
        <SidebarManage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Assignments" element={<Assignments />} />
          <Route path="/Assignments/:id" element={<AssignmentDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
