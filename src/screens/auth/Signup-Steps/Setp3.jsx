import React, { useState } from "react";
import InputField from "../../../components/common/InputField";
import RightWhiteArrow from "../../../assets/Icons/RegistrationIcons/RightWhiteArrow.svg";
import "../../../styles/Auth.css";
//
const Step3 = ({ nextStep, prevStep, updateFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ email: "youremail@gmail.com", password: "12345678" });
    nextStep();
  };
  const [SelectTeam, setSelectTeam] = useState("2-5");
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
        <div className="space-y-4 mt-10">
          <div className="text-center font-bold">
            <h4 className="text-[14px] text-[#3F8CFF]">Step 3/4</h4>
            <h2 className="text-[22px]">Tell about your company</h2>
          </div>
          {/* DropDowns */}
          <div className="mt-10 w-full">
            <InputField
              label="Your Company’s Name"
              type="text"
              name="text"
              //   value={formData.email}
              //   onChange={handleChange}
              //   error={errors.email}
              placeholder="Company’s Name"
            />
            <div className="mt-5">
              <InputField
                fieldType="dropdown"
                label="Business Direction"
                name="sport"
                // value={selectedSport}
                // onChange={(e) => setSelectedSport(e.target.value)}
                options={[
                  {
                    label: "IT and programming",
                    value: "IT and programming",
                  },
                  {
                    label: "Technology & Software",
                    value: "technology_software",
                  },
                  { label: "E-commerce & Retail", value: "ecommerce_retail" },
                  {
                    label: "Healthcare & Medical",
                    value: "healthcare_medical",
                  },
                  {
                    label: "Finance & Investment",
                    value: "finance_investment",
                  },
                  {
                    label: "Marketing & Advertising",
                    value: "marketing_advertising",
                  },
                  {
                    label: "Education & Training",
                    value: "education_training",
                  },

                  { label: "Other", value: "other" },
                ]}

                // error={sportError}
              />
            </div>
          </div>
          {/* TEAM*/}
          <div className="mt-5">
            <p className="my-auto text-[14px] text-[#7D8592] font-bold">
              How many people in your team?{" "}
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-4 mt-5 gap-4">
              <div
                onClick={() => setSelectTeam("only-me")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "only-me"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                Only me
              </div>
              <div
                onClick={() => setSelectTeam("2-5")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "2-5" ? "ActiveTeamSelection" : "TeamSelection"
                }`}
              >
                2 - 5
              </div>
              <div
                onClick={() => setSelectTeam("6-10")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "6-10"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                6 - 10
              </div>
              <div
                onClick={() => setSelectTeam("11-20")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "11-20"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                11 - 20
              </div>
              <div
                onClick={() => setSelectTeam("21-40")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "21-40"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                21 - 40
              </div>
              <div
                onClick={() => setSelectTeam("41-50")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "41-50"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                41 - 50
              </div>
              <div
                onClick={() => setSelectTeam("51-100")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "51-100"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                51 - 100
              </div>
              <div
                onClick={() => setSelectTeam("101-500")}
                className={`py-3 cursor-pointer ${
                  SelectTeam === "101-500"
                    ? "ActiveTeamSelection"
                    : "TeamSelection"
                }`}
              >
                101 - 500
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 border border-[#E4E6E8] border-[.1px] " />

      <div className="mt-5 flex justify-between">
        <div className="">
          <button
            type="button"
            onClick={prevStep}
            className="flex gap-3 px-5 h-[48px] cursor-pointer text-white rounded-[14px]"
          >
            <span className="my-auto text-[16px] text-[#3F8CFF] font-bold">
              {" "}
              ←&nbsp; Previous
            </span>
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="flex gap-3 px-5 h-[48px] bg-[#3F8CFF] cursor-pointer text-white rounded-[14px]"
          >
            <span className="my-auto text-[16px] font-bold"> Next step </span>
            <span className="my-auto">
              <img src={RightWhiteArrow} alt={RightWhiteArrow} />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step3;
