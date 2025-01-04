import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowAssignment from "./ShowAssignment";
import Dashboard from "./Dashboard";
import AssignmentDetail from "./AssignmentDetail";
import Courses from "./Courses";
import Messages from "./Messages";
import Profile from "./Profile";
const Student = () => {
  return (
    <div>
      <h1>Students</h1>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/ShowAssignment" element={<ShowAssignment />}></Route>
        <Route path="/AssignmentDetail" element={<AssignmentDetail />}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default Student;
