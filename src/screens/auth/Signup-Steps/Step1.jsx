import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import WarningBlueIcon from "../../../assets/Icons/RegistrationIcons/WarningBlueIcon.svg";
import InputField from "../../../components/common/InputField";
import ViewpasswordIcon from "../../../assets/Icons/RegistrationIcons/ViewpasswordIcon.svg";
import RightWhiteArrow from "../../../assets/Icons/RegistrationIcons/RightWhiteArrow.svg";
//
const Step1 = ({ nextStep, updateFormData }) => {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [ShowPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ phone: "+1 345 567-23-56", smsCode: "1234" });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="flex justify-center">
        <div className="space-y-4 mt-10">
          <div className="text-center font-bold">
            <h4 className="text-[14px] text-[#3F8CFF]">Step 1/4</h4>
            <h2 className="text-[22px]">Valid your phone</h2>
          </div>

          <div>
            <div className="mb-1">
              <label className="text-[#7D8592] text-[14px] font-bold">
                Mobile Number
              </label>
            </div>
            <PhoneInput
              country={"pk"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass=" w-full !h-12 !text-gray-700 !border !border-[#D8E0F0] !rounded-[14px]"
            />
          </div>

          {/* OTP */}
          <div className="mt-8">
            <div className="mb-1">
              <label className="text-[#7D8592] text-[14px] font-bold">
                Code from SMS
              </label>
            </div>
            <div className="flex gap-5">
              <input
                type="text"
                maxLength="1"
                className="border border-[#D8E0F0] border-[1.5px] outline-none p-2 w-[50px] h-[50px] text-center rounded-[14px]"
              />
              <input
                type="text"
                maxLength="1"
                className="border border-[#D8E0F0] border-[1.5px] outline-none p-2 w-[50px] h-[50px] text-center rounded-[14px]"
              />
              <input
                type="text"
                maxLength="1"
                className="border border-[#D8E0F0] border-[1.5px] outline-none p-2 w-[50px] h-[50px] text-center rounded-[14px]"
              />
              <input
                type="text"
                maxLength="1"
                className="border border-[#D8E0F0] border-[1.5px] outline-none p-2 w-[50px] h-[50px] text-center rounded-[14px]"
              />
            </div>
          </div>

          {/* TIMER */}
          <div className="flex gap-2 mt-10">
            <div className="">
              <img src={WarningBlueIcon} alt={WarningBlueIcon} className="" />
            </div>
            <div className="">
              <p className="text-[14px] font-semibold text-[#3F8CFF]">
                SMS was sent to your number +1 345 673-56-67
              </p>
              <p className="text-[14px] font-semibold text-[#3F8CFF]">
                It will be valid for 01:25
              </p>
            </div>
          </div>

          {/* INPUT FIELDS */}
          <div className="mt-10">
            <InputField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="youremail@gmail.com"
              error={errors.email}
            />
            <div className="mt-5 relative">
              <InputField
                label="Password"
                type={ShowPass ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="******"
                error={errors.password}
                className=""
              />
              <span className=" absolute right-[10px] top-[2.4rem] cursor-pointer">
                <img
                  src={ViewpasswordIcon}
                  alt=""
                  onClick={() => setShowPass(!ShowPass)}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10 border border-[#E4E6E8] border-[.1px] " />
      <div className="mt-5 flex justify-end">
        <button
          type="submit"
          className="flex gap-3 px-5 h-[48px] bg-[#3F8CFF] mt-5 cursor-pointer text-white rounded-[14px]"
        >
          <span className="my-auto text-[16px] font-bold"> Next step </span>
          <span className="my-auto">
            <img src={RightWhiteArrow} alt={RightWhiteArrow} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Step1;
