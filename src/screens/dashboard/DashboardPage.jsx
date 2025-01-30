import React, { useEffect, useState } from "react";
import WorkroomLogo from "../../assets/Icons/WorkroomLogo.svg";
import Project1 from "../../assets/Images/dashboard/Project1.png";
import Project2 from "../../assets/Images/dashboard/Project2.png";
import Project3 from "../../assets/Images/dashboard/Project3.png";
import {
  ArrowUpOutlined,
  ClockCircleFilled,
  ArrowDownOutlined,
  CalendarFilled,
} from "@ant-design/icons";

const usersData = [
  {
    id: 1,
    name: "Shawn Stone",
    role: "UI/UX Designer",
    level: "Middle",
    image: Project3,
  },
  {
    id: 2,
    name: "Emily Carter",
    role: "Frontend Developer",
    level: "Senior",
    image: Project2,
  },
  {
    id: 3,
    name: "David Smith",
    role: "Backend Developer",
    level: "Junior",
    image: Project1,
  },
  {
    id: 4,
    name: "Olivia Brown",
    role: "Project Manager",
    level: "Senior",
    image: Project2,
  },
  {
    id: 5,
    name: "Ethan Wilson",
    role: "Mobile Developer",
    level: "Middle",
    image: Project3,
  },
  {
    id: 6,
    name: "Sophia Johnson",
    role: "QA Engineer",
    level: "Junior",
    image: Project3,
  },
  {
    id: 7,
    name: "Liam Martinez",
    role: "Data Scientist",
    level: "Senior",
    image: Project2,
  },
  {
    id: 8,
    name: "Mia Davis",
    role: "Cybersecurity Analyst",
    level: "Middle",
    image: Project1,
  },
];

const NearestEvents = [
  {
    id: 1,
    title: "Presentation of the new department",
    status: "up",
    time: "Today | 5:00 PM",
    hour: "4h",
    borderColor: "#3F8CFF",
    iconColor: "#FFBD21",
  },
  {
    id: 2,
    title: "Anna’s Birthday",
    status: "down",
    time: "Today | 6:00 PM",
    hour: "4h",
    borderColor: "#DE92EB",
    iconColor: "#0AC947",
  },
  {
    id: 3,
    title: "Team Meeting",
    status: "up",
    time: "Tomorrow | 10:00 AM",
    hour: "6h",
    borderColor: "#0AC947",
    iconColor: "#FFD700",
  },
  {
    id: 4,
    title: "Anna’s Birthday",
    status: "down",
    time: "Today | 6:00 PM",
    hour: "4h",
    borderColor: "#DE92EB",
    iconColor: "#0AC947",
  },
];

const projects = [
  {
    id: "PN0001265",
    name: "Medical App (iOS native)",
    created: "Sep 12, 2020",
    priority: "Medium",
    tasks: 34,
    image: Project3,

    activeTasks: 13,
    assignees: [Project1, Project2, Project3],
  },
  {
    id: "PN0001266",
    name: "E-Commerce Platform",
    created: "Oct 5, 2021",
    priority: "High",
    tasks: 45,
    image: Project2,
    activeTasks: 20,
    assignees: [Project1, Project2, Project3],
  },
  {
    id: "PN0001267",
    name: "AI Chatbot Development",
    created: "Dec 25, 2022",
    priority: "Low",
    tasks: 28,
    image: Project1,

    activeTasks: 10,
    assignees: [Project1, Project2, Project3],
  },
];

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      <h2 className="text-[#7D8592] text-[16px]">Welcome back, Evan!</h2>
      <div className="my-4 flex justify-between">
        <div className="my-auto">
          <h1 className="text-[#0A1629] font-bold text-[26px]">Dashboard</h1>
        </div>
        <div className="my-auto">
          <h2 className="text-[#7D8592] text-[16px] bg-[#E6EDF5] py-2 px-4 rounded-[14px]">
            Nov 16, 2020 - Dec 16, 2020
          </h2>
        </div>
      </div>
      {/*  */}
      <div className="my-5 grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="col-span-5 bg-white p-4 rounded-[14px]">
          <div className="flex justify-between">
            <h1 className="my-auto font-bold text-[22px]">Workload</h1>
            <h1 className="my-auto text-[16px] font-semibold text-[#3F8CFF] cursor-pointer">
              View all
            </h1>
          </div>
          {/* Cards */}
          <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading ? (
              <p className="text-center col-span-4 text-gray-500">Loading...</p>
            ) : users.length === 0 ? (
              <p className="text-center col-span-4 text-gray-500">
                No data found
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user.id}
                  className="bg-[#F4F9FD] p-5 rounded-[14px] text-center"
                >
                  <center>
                    <img
                      src={user.image}
                      alt={user.image}
                      className="w-[50px] h-[50px] rounded-full border-[2px] border-[#3F8CFF] m-1"
                    />
                  </center>
                  <p className="mt-4 text-[16px] font-bold text-[#0A1629]">
                    {user.name}
                  </p>
                  <p className="mt-2 text-[14px]">{user.role}</p>
                  <p className="mt-2 text-[12px] font-semibold text-[#7D8592] border border-[#7D8592] border-[1.5px] m-auto w-[60px] rounded-[10px] p-1 block">
                    {user.level}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
        {/* EVENTS */}
        <div className="col-span-2  bg-white p-4 rounded-[14px]">
          <div className="flex justify-between">
            <h1 className="my-auto font-bold text-[22px]">Nearest Events</h1>
            <h1 className="my-auto text-[16px] font-semibold text-[#3F8CFF] cursor-pointer">
              View all
            </h1>
          </div>
          {/*  */}
          <div className="mt-5">
            {NearestEvents.map((event) => (
              <div
                key={event.id}
                className={`mt-5 border-l-[4px] pl-2`}
                style={{ borderColor: event.borderColor }}
              >
                <div className="flex justify-between">
                  <h1 className="my-auto font-bold text-[16px]">
                    {event.title}
                  </h1>
                  <div className="">
                    {event.status === "up" ? (
                      <ArrowUpOutlined style={{ color: event.iconColor }} />
                    ) : (
                      <ArrowDownOutlined style={{ color: event.iconColor }} />
                    )}
                  </div>
                </div>
                <div className="flex justify-between mt-3">
                  <p className="my-auto text-[#91929E] text-[14px]">
                    {event.time}
                  </p>
                  <div className="bg-[#F4F9FD] py-2 px-3 rounded-[14px] text-center">
                    <ClockCircleFilled style={{ color: "#7D8592" }} />
                    &nbsp;&nbsp;
                    <span className="font-bold text-[#7D8592]">
                      {event.hour}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="my-5 grid grid-cols-1 lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="col-span-5">
          <div className="flex justify-between">
            <h1 className="my-auto font-bold text-[22px]">Projects</h1>
            <h1 className="my-auto text-[16px] font-semibold text-[#3F8CFF] cursor-pointer">
              View all
            </h1>
          </div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="my-5 bg-white rounded-[24px] w-full"
            >
              <div className="flex justify-between w-full">
                {/* Left Section */}
                <div className="w-2/4 border-r-[1px] border-r-[#E4E6E8] p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.image}
                        className="w-[50px] h-[50px] rounded-[15px] object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#91929E] text-[14px]">{project.id}</p>
                      <h2 className="text-[18px] font-bold text-[#0A1629]">
                        {project.name}
                      </h2>
                    </div>
                  </div>
                  <div className="flex justify-between pr-5 mt-[20px]">
                    <div className="flex gap-3">
                      <div className="my-auto">
                        <CalendarFilled
                          style={{ color: "#7D8592" }}
                          className="text-[#7D8592] text-[25px] rounded-[10px]"
                        />
                      </div>
                      <span className="my-auto text-[14px] font-semibold text-[#7D8592]">
                        Created {project.created}
                      </span>
                    </div>
                    <div className="flex items-center ml-4 text-[#FFBD21] font-bold">
                      <ArrowUpOutlined className="mr-1 text-[#FFBD21]" />
                      {project.priority}
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="w-2/4 py-5 px-10">
                  <h3 className="text-lg font-bold text-[#0A1629]">
                    Project Data
                  </h3>
                  <div className="flex justify-between items-center gap-6 mt-2">
                    <div className="text-[#91929E] text-[14px]">
                      <p>All tasks</p>
                      <p className="text-[#0A1629] font-bold text-[16px]">
                        {project.tasks}
                      </p>
                    </div>
                    <div className="text-[#91929E] text-[14px]">
                      <p>Active tasks</p>
                      <p className="text-[#0A1629] font-bold text-[16px]">
                        {project.activeTasks}
                      </p>
                    </div>
                    <div className="text-[#91929E] text-[14px] mt-[5px]">
                      <p>Assignees</p>
                      <div className="flex items-center -space-x-2">
                        {project.assignees.slice(0, 3).map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt="Assignee"
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        ))}
                        {project.assignees.length > 3 && (
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
                            +{project.assignees.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="">two</div>
      </div>
    </div>
  );
};

export default DashboardPage;
