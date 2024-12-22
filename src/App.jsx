import React from "react";
import Sidebar from "./pages/Students/Components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Students/Components/Dashboard";
import Home from "./pages/Students/Components/Home";
import Courses from "./pages/Students/Components/Courses";
import Layout from "./pages/Students/Components/Layout";
import Messages from "./pages/Students/Components/Messages";
import Progress from "./pages/Students/Components/Progress";
import Profile from "./pages/Students/Components/Profile";
import Assignments from "./pages/Students/Components/ShowAssignment";
const App = () => {
  return (
    <div className="bg-[#F6F6F6] h-screen">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Assignments" element={<Assignments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
