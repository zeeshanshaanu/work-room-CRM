import React from "react";

const InputField = ({
  fieldType = "input",
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  options = [],
}) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label className="block text-[14px] text-[#7D8592] font-bold mb-1">
        {label}
      </label>
      )}

      {/* Render Input Field */}
      {fieldType === "input" && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-[400px] p-3 border text-[#7D8592] rounded-[15px] ${
            error ? "border-red-500" : "border-[#D8E0F0]"
          }`}
        />
      )}

      {/* Render Dropdown Field */}
      {fieldType === "dropdown" && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`w-[400px] px-4 py-3 border text-[#7D8592] rounded-[15px] ${
            error ? "border-red-500" : "border-[#D8E0F0]"
          }`}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
