import React from "react";
import { Outlet } from "react-router-dom";
//
import SidebarMainLogo from "../assets/Icons/Sidebar/SidebarMainLogo.svg";
import DashboardFlat from "../assets/Icons/Sidebar/DashboardFlat.svg";
import CalenderFlat from "../assets/Icons/Sidebar/CalenderFlat.svg";
import EmployeesFlat from "../assets/Icons/Sidebar/EmployeesFlat.svg";
import InfoportalFlat from "../assets/Icons/Sidebar/InfoportalFlat.svg";
import MessengerFlat from "../assets/Icons/Sidebar/MessengerFlat.svg";
import ProjectsFlat from "../assets/Icons/Sidebar/ProjectsFlat.svg";
import VacationsFlat from "../assets/Icons/Sidebar/VacationsFlat.svg";
import SupportIcon from "../assets/Icons/Sidebar/SupportIcon.svg";
import LogoutIcon from "../assets/Icons/Sidebar/LogoutIcon.svg";
import HeaderProfileDropdown from "../components/common/HeaderProfileDropdown";
import Notifications from "../components/common/Notifications";
//
const CustomSidebar = () => {
  return (
    <div>
      <div className="flex gap-x-[30px] m-4">
        <div className="Left-sidebar-item min-h-[100vh] bg-white w-[250px] p-5 rounded-[24px]">
          <div className="my-6">
            <img
              src={SidebarMainLogo}
              alt={SidebarMainLogo}
              className="cursor-pointer"
            />
          </div>
          <div className="Left-sidebar-item mt-[30px]">
            {/*  */}
            <div className="Dashboard cursor-pointer mt-[30px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={DashboardFlat} alt={DashboardFlat} className="" />
                <span className="my-auto">Dashboard</span>
              </p>
            </div>

            <div className="Projects cursor-pointer mt-[10px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={ProjectsFlat} alt={ProjectsFlat} className="" />
                <span className="my-auto">Projects</span>
              </p>
            </div>

            <div className="Calendar cursor-pointer mt-[10px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={CalenderFlat} alt={CalenderFlat} className="" />
                <span className="my-auto">Calendar</span>
              </p>
            </div>

            <div className="Employees cursor-pointer mt-[10px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={EmployeesFlat} alt={EmployeesFlat} className="" />
                <span className="my-auto">Employees</span>
              </p>
            </div>

            <div className="Employees cursor-pointer mt-[10px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={VacationsFlat} alt={VacationsFlat} className="" />
                <span className="my-auto">Vacations</span>
              </p>
            </div>

            <div className="Messenger cursor-pointer mt-[10px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={MessengerFlat} alt={MessengerFlat} className="" />
                <span className="my-auto">Messenger</span>
              </p>
            </div>

            <div className="Info_Portal cursor-pointer mt-[10px]">
              <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:bg-[#ECF3FF] hover:text-[#3F8CFF]  p-3">
                <img src={InfoportalFlat} alt={InfoportalFlat} className="" />
                <span className="my-auto">Info Portal</span>
              </p>
            </div>

            <div className=" bottom-5">
              <div className="SupportIcon cursor-pointer mt-[10px]">
                <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:text-[#3F8CFF]  p-3">
                  <img src={SupportIcon} alt={SupportIcon} className="" />
                </p>
              </div>

              <div className="Logout cursor-pointer mt-[10px]">
                <p className="flex my-auto flex gap-x-3 text-[16px] rounded-[10px] text-[#7D8592] font-bold hover:text-[#3F8CFF]  p-3">
                  <img src={LogoutIcon} alt={LogoutIcon} className="" />
                  <span className="my-auto">Logout</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////    HEADER AND CONTETN     /////////////////////////////// */}
        {/* //////////////////////////    HEADER AND CONTETN     /////////////////////////////// */}

        <div className="Header-AND-Content w-full">
          <div className="Header flex justify-between">
            <div className="Search_bar my-auto">
              <input
                type="search"
                placeholder="search"
                className="w-[400px] py-3 px-5 border rounded-[14px] border-none outline-none bg-white"
              />
            </div>
            <div className="my-auto">
              <div className="flex gap-x-4">
                <div className="">
                  <Notifications />
                </div>
                <div className="">
                  <HeaderProfileDropdown />
                </div>
              </div>
            </div>
          </div>

          <div className="Content mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSidebar;
