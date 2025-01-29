import React from "react";
import InputField from "../../../components/common/InputField";
import RightWhiteArrow from "../../../assets/Icons/RegistrationIcons/RightWhiteArrow.svg";

//
const Step2 = ({ nextStep, prevStep, updateFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ email: "youremail@gmail.com", password: "12345678" });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
        <div className="space-y-4 mt-10">
          <div className="text-center font-bold">
            <h4 className="text-[14px] text-[#3F8CFF]">Step 2/4</h4>
            <h2 className="text-[22px]">Tell about yourself</h2>
          </div>
          {/* DropDowns */}
          <div className="mt-10 w-full">
            <InputField
              fieldType="dropdown"
              label="Why will you use the service?"
              name="sport"
              // value={selectedSport}
              // onChange={(e) => setSelectedSport(e.target.value)}
              options={[
                { label: "Project Management", value: "project_management" },
                { label: "Collaboration & Teamwork", value: "collaboration" },
                { label: "Marketing & Sales", value: "marketing_sales" },
                { label: "Customer Support", value: "customer_support" },
                { label: "Data Analysis & Reporting", value: "data_analysis" },
              ]}

              // error={sportError}
            />
            <div className="mt-5">
              <InputField
                fieldType="dropdown"
                label="What describes you best?"
                name="sport"
                // value={selectedSport}
                // onChange={(e) => setSelectedSport(e.target.value)}
                options={[
                  { label: "Software Engineer", value: "software_engineer" },
                  { label: "Product Manager", value: "product_manager" },
                  { label: "Designer", value: "designer" },
                  { label: "Entrepreneur", value: "entrepreneur" },
                  { label: "Student", value: "student" },
                  { label: "Other", value: "other" },
                ]}

                // error={sportError}
              />
            </div>
          </div>
          {/* Radio Button */}
          <div className="mt-5 flex justify-between">
            <p className="my-auto text-[14px] text-[#7D8592] font-bold">
              What describes you best?
            </p>
            <div className="my-auto">
              <div className="flex gap-x-5">
                <label className="flex items-center gap-5 cursor-pointer">
                  <input
                    type="radio"
                    name="description"
                    value="Yes"
                    className="w-5 h-5"
                  />
                  <span className="my-auto">Yes</span>
                </label>

                <label className="flex items-center gap-5 cursor-pointer">
                  <input
                    type="radio"
                    name="description"
                    value="No"
                    className="w-5 h-5"
                  />
                  <span className="my-auto">No</span>
                </label>
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

export default Step2;
