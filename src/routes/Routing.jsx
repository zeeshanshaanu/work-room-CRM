import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup-Steps/Signup";
import Registered from "../screens/auth/Signup-Steps/Registered";
import CustomSidebar from "../layout/CustomSidebar";
import DashboardPage from "../screens/dashboard/DashboardPage";
import Projects from "../screens/Projects/Projects";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/Registered-successfully" element={<Registered />} />
          <Route path="/" element={<CustomSidebar />}>
            <Route path="/Dashboard" element={<DashboardPage />} />
            <Route path="/Projects" element={<Projects />} />
          </Route>

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
