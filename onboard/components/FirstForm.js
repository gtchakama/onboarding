import React from "react";

function FirstForm() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-blue py-6 rounded px-10 w-2/5 ">
        <h1 className="text-3xl font-bold text-black my-6">
          Employer onboarding Form
        </h1>
        <p className="text-gray-600 text-xl">
          Fill in your data below it will only take a couple of minutes.
        </p>
        <div className="space-y-4 w-full mt-6">
          <div className="w-full">
            <span className="text-lg py-4 font-light text-gray-600 ">
              {" "}
              Company Name
            </span>
            <input
              type="text"
              placeholder=" Enter text here"
              className="px-4 py-4 text-xl font-light border border-gray-300 rounded w-full my-4  "
            />
          </div>

          <div className="w-full">
            <span className="text-lg py-4 font-light text-gray-600 ">
              {" "}
              No of Employees
            </span>
            <input
              type="text"
              placeholder="Enter text here"
              className="px-4 py-4 text-xl font-light border border-gray-300 rounded w-full my-4  "
            />
          </div>

          <div className="w-full">
            <span className="text-lg py-4 font-light text-gray-600 ">
              {" "}
              Addresse
            </span>
            <input
              type="text"
              placeholder="Enter text here"
              className="px-4 py-4 text-xl font-light border border-gray-300 rounded w-full my-4  "
            />
          </div>

          <div className="w-full">
            <span className="text-lg py-4 font-light text-gray-600 ">
              {" "}
              Contact Person Name
            </span>
            <input
              type="text"
              placeholder=" Enter text here"
              className="px-4 py-4 text-xl font-light border border-gray-300 rounded w-full my-4  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstForm;
