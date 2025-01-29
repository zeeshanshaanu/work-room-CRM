import React, { useState } from "react";
import { BellOutlined } from "@ant-design/icons";
//

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)}>
      <div className="flex justify-between gap-2 bg-white p-3 rounded-[14px] cursor-pointer">
        <div className="my-auto flex gap-x-2">
          <BellOutlined className="text-[30px] text-[#0A1629]" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-10"
        >
          <ul className="text-gray-700">
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Notifications1
            </li>
            <li className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
              Notifications2
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
