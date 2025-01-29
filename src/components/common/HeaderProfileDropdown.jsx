import React, { useState } from "react";
import SidebarMainLogo from "../../assets/Icons/Sidebar/SidebarMainLogo.svg";
import LogoutIcon from "../../assets/Icons/Sidebar/LogoutIcon.svg";

import { DownOutlined, UpOutlined } from "@ant-design/icons";
//

const HeaderProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseLeave={() => setIsOpen(false)}
      onMouseEnter={() => setIsOpen(true)}
    >
      {/* Profile Section */}
      <div className="flex justify-between gap-2 bg-white p-3 w-[180px] rounded-[14px] cursor-pointer">
        <div className="my-auto flex gap-x-2">
          <img
            src={SidebarMainLogo}
            alt={SidebarMainLogo}
            className="w-[30px] h-[30px] my-auto rounded-full object-cover"
          />
          <p className="text-[16px] font-bold my-auto">John Doe</p>
        </div>
        <span className="my-auto">
          {!isOpen ? (
            <DownOutlined className="text-[12px]" />
          ) : (
            <UpOutlined className="text-[12px]" />
          )}
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(true)}
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-10"
        >
          <ul className="text-gray-700">
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Profile
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Settings
            </li>
            <li className="my-auto flex gap-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              <img src={LogoutIcon} alt={LogoutIcon} className="" />
              <span className="my-auto">Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderProfileDropdown;
