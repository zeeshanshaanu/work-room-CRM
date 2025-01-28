import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// 
import SignUpLogo from "../../assets/Images/auth/SignUpLogo.png";
import InputField from "../../components/common/InputField";
import ViewpasswordIcon from "../../assets/Icons/RegistrationIcons/ViewpasswordIcon.svg";
import RightWhiteArrow from "../../assets/Icons/RegistrationIcons/RightWhiteArrow.svg";
import "../../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [ShowPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    console.log(formData);
  };
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-[14px]">
        {/*  */}
        <div className="Left_Image min-w-full">
          <img src={SignUpLogo} alt={SignUpLogo} className="" />
        </div>
        {/*  */}
        <div className="bg-white lg:pt-20 lg:px-20 px-5 rounded-tr-[24px] rounded-br-[24px]">
          <div className="ForCentessr">
            <h1 className="text-center text-[#0A1629] text-[22px] pt-5 font-bold">
              Sign In to Woorkroom
            </h1>
            <div className="mt-10 w-full">
              <form onSubmit={handleSubmit}>
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
                <div className="mt-5 flex justify-between">
                  <div className="mu-auto text-[#7D8592] text-[16px] cursor-pointer">
                    Remember me
                  </div>
                  <div className="mu-auto text-[#7D8592] text-[16px] cursor-pointer">
                    Forgot Password?
                  </div>
                </div>
                <center className="mt-5">
                  <button
                    type="submit"
                    className="flex gap-3 px-10 h-[48px] bg-[#3F8CFF] mt-5 cursor-pointer text-white rounded-[14px]"
                  >
                    <span className="my-auto"> Sign in </span>
                    <span className="my-auto">
                      <img src={RightWhiteArrow} alt={RightWhiteArrow} />
                    </span>
                  </button>
                </center>
              </form>
              <div
                onClick={() => navigate("/sign-up")}
                className="mt-5 text-center text-[#3F8CFF] text-[16px] font-semibold cursor-pointer"
              >
                Don’t have an account?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
