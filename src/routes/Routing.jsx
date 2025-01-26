import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../screens/auth/Registration";
import Login from "../screens/auth/Login";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
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
