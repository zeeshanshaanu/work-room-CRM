import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="mb-4 w-full">
      {label && <label className="block text-[14px] text-[#7D8592] font-bold mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border text-[#7D8592] rounded-[15px] ${
          error ? "border-red-500" : "border-[#D8E0F0]"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
