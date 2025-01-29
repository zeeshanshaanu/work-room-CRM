import React, { useState } from "react";
import InputField from "../../../components/common/InputField";
import RightWhiteArrow from "../../../assets/Icons/RegistrationIcons/RightWhiteArrow.svg";
import "../../../styles/Auth.css";
import { useNavigate } from "react-router-dom";

const Step4 = ({ nextStep, prevStep, updateFormData }) => {
  const navigate = useNavigate();

  const [emails, setEmails] = useState([{ email: "" }]);
  const handleEmailChange = (e, index) => {
    const newEmails = [...emails];
    newEmails[index].email = e.target.value;
    setEmails(newEmails);
  };

  const addEmailField = () => {
    if (emails.length < 5) {
      setEmails([...emails, { email: "" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect all emails and pass them to updateFormData
    updateFormData({ emails: emails.map((email) => email.email) });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
        <div className="space-y-4 mt-10">
          <div className="text-center font-bold">
            <h4 className="text-[14px] text-[#3F8CFF]">Step 4/4</h4>
            <h2 className="text-[22px]">Invite Team Members</h2>
          </div>
          {/* Dynamic Email Inputs */}
          <div className="mt-10 w-full">
            {emails.map((email, index) => (
              <InputField
                key={index}
                label={`Member’s Email ${index + 1}`}
                type="email"
                name={`email-${index}`}
                value={email.email}
                onChange={(e) => handleEmailChange(e, index)}
                placeholder="memberemail@gmail.com"
              />
            ))}
          </div>
          {/* Add another member button */}
          {emails.length < 5 && (
            <div className="mt-5">
              <h4
                className="text-[16px] text-semibold text-[#3F8CFF] cursor-pointer"
                onClick={addEmailField}
              >
                + Add another Member
              </h4>
            </div>
          )}
        </div>
      </div>
      <hr className="mt-10 border border-[#E4E6E8] border-[.1px]" />

      <div className="mt-5 flex justify-between">
        <div className="">
          <button
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
            onClick={() => navigate("/Registered-successfully")}
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

export default Step4;
