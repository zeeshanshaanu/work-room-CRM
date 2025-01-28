import React from "react";

const Step2 = ({ nextStep, prevStep, updateFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ email: "youremail@gmail.com", password: "12345678" });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Tell about yourself</h2>
      <input
        type="email"
        placeholder="Email Address"
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="Create Password"
        className="border p-2 w-full"
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white p-2 rounded"
        >
          ← Back
        </button>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Next Step →
        </button>
      </div>
    </form>
  );
};

export default Step2;
