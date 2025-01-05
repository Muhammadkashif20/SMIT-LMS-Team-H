import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import CoursesManage from "./CoursesManage";
import Communication from "./Communication";
import TrackingStudent from "./TrackingStudent";
import AssignmentManage from "./AssignmentManage";
import Profile from "./Profile";

const Teacher = () => {
  return (
    <div>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/AssignmentManage" element={<AssignmentManage />}></Route>
        <Route path="/CoursesManage" element={<CoursesManage />}></Route>
        <Route path="/Communication" element={<Communication />}></Route>
        <Route path="/TrackingStudent" element={<TrackingStudent />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default Teacher;
