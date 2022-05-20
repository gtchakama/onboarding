import React from "react";

function SecondForm() {
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
              Contact Person Email Address
            </span>
            <input
              type="text"
              placeholder=" Enter text here"
              className="px-4 py-4 text-lg font-light border border-gray-300 rounded w-full my-4  "
            />
          </div>

          <div className="w-full">
            <span className="text-lg py-4 font-light text-gray-600 ">
              {" "}
              Guarantee Period
            </span>
            <input
              type="text"
              placeholder="Enter text here"
              className="px-4 py-4 text-lg font-light border border-gray-300 rounded w-full my-4  "
            />
          </div>

          <span className="text-lg py-4 font-light text-gray-600 ">
            {" "}
            Upload Doc
          </span>

          <div className="relative text-gray-700">
            <input
              className="w-full h-10 px-4 py-6 text-lg font-light border rounded focus:shadow-outline"
              type="text"
              placeholder="Upload CAC and relevent docs"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-4  text-white bg-gray-400 rounded-r hover:bg-[#3754a5] focus:bg-[#3754a5]">
              Upload Cac
            </button>
          </div>

          <div className="w-full">
            <span className="text-lg py-4 font-light text-gray-600 ">
              {" "}
              Upload other Docs
            </span>

            <div className="relative text-gray-700 mt-4">
              <input
                className="w-full h-10 px-4 py-6 text-lg font-light border rounded focus:shadow-outline"
                type="text"
                placeholder="Regular input"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-4  text-white bg-gray-400 rounded-r hover:bg-[#3754a5] focus:bg-[#3754a5]">
                Upload other Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondForm;
