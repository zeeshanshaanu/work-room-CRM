import React, { useState } from "react";

import WorkroomLogo from "../../../assets/Icons/WorkroomLogo.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Setp3";
import Step4 from "./Step4";
// import Step3 from "./Step3";
// import Step4 from "./Step4";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    smsCode: "",
    email: "",
    password: "",
    name: "",
    company: "",
    teamMembers: [],
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {/* Sidebar */}
        <div className="col-span-1 rounded-[24px] bg-[#3F8CFF] text-white p-6">
          <div className="my-5">
            <img src={WorkroomLogo} alt={WorkroomLogo} className="" />
          </div>
          <h2 className="text-[36px] font-bold my-10">Get started</h2>
          <ul className="mt-6">
            <li
              className={`mt-[35px] ${
                step === 1 ? "font-semibold" : "opacity-50"
              }`}
            >
              ✔ &nbsp;Valid your phone
            </li>
            <li
              className={`mt-[35px] ${
                step === 2 ? "font-semibold" : "opacity-50"
              }`}
            >
              ✔ &nbsp;Tell about yourself
            </li>
            <li
              className={`mt-[35px] ${
                step === 3 ? "font-semibold" : "opacity-50"
              }`}
            >
              ✔ &nbsp;Tell about your company
            </li>
            <li
              className={`mt-[35px] ${
                step === 4 ? "font-semibold" : "opacity-50"
              }`}
            >
              ✔ &nbsp;Invite Team Members
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="col-span-3 md:col-span-2 lg:col-span-3 rounded-[24px] bg-white p-8 w-full">
          {step === 1 && (
            <Step1 nextStep={nextStep} updateFormData={updateFormData} />
          )}
          {step === 2 && (
            <Step2
              nextStep={nextStep}
              prevStep={prevStep}
              updateFormData={updateFormData}
            />
          )}
          {step === 3 && (
            <Step3
              nextStep={nextStep}
              prevStep={prevStep}
              updateFormData={updateFormData}
            />
          )}
          {step === 4 && <Step4 prevStep={prevStep} formData={formData} />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
