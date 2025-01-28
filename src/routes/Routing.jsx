import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup-Steps/Signup";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          {/* <Route path="/" element={<CustomSidebar />}> */}

          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          {/* </Route> */}

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
