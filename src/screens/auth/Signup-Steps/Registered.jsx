import React from "react";
import RegisteredSuccessfully from "../../../assets/Images/auth/RegisteredSuccessfully.png";
import RightWhiteArrow from "../../../assets/Icons/RegistrationIcons/RightWhiteArrow.svg";
import { useNavigate } from "react-router-dom";
//
const Registered = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={RegisteredSuccessfully}
          alt={RegisteredSuccessfully}
          className="w-[450px] object-cover"
        />
        <center className="mt-5">
          <h2 className=" text-[22px] font-bold">
            You are successfully registered!
          </h2>
          <div className="mt-5">
            <button
              onClick={() => navigate("/Dashboard")}
              className="flex gap-3 px-5 h-[48px] bg-[#3F8CFF] cursor-pointer text-white rounded-[14px]"
            >
              <span className="my-auto text-[16px] font-bold">
                {" "}
                Let's Start{" "}
              </span>
              <span className="my-auto">
                <img src={RightWhiteArrow} alt={RightWhiteArrow} />
              </span>
            </button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Registered;
