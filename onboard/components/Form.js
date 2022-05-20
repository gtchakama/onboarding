import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstForm formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SecondForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div>{PageDisplay()}</div>
        <div className="flex items-center justify-center px-12 w-full">
          <div className="flex items-center justify-between w-2/5 px-6">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="cursor-pointer text-xl text-black hover:text-indigo-800 flex justify-center items-center "
            >
              <svg
                className="mr-2"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.369216 4.869C0.425718 4.811 0.639065 4.563 0.837798 4.359C2.00292 3.076 5.04238 0.976 6.63322 0.335C6.87482 0.232 7.48563 0.014 7.81198 0C8.1247 0 8.4228 0.072 8.70726 0.218C9.06186 0.422 9.34632 0.743 9.50219 1.122C9.60253 1.385 9.7584 2.172 9.7584 2.186C9.91427 3.047 10 4.446 10 5.992C10 7.465 9.91427 8.807 9.78665 9.681C9.77204 9.695 9.61617 10.673 9.44569 11.008C9.13298 11.62 8.52216 12 7.86848 12H7.81198C7.38626 11.985 6.49099 11.605 6.49099 11.591C4.98587 10.949 2.01656 8.952 0.823186 7.625C0.823186 7.625 0.487092 7.284 0.340964 7.071C0.113005 6.765 0 6.386 0 6.007C0 5.584 0.127618 5.19 0.369216 4.869"
                  fill="#3754A5"
                />
              </svg>
              Go back
            </button>
            <button
              className=" w-1/2 mt-5 bg-[#3754a5] text-xl text-white py-4 rounded-md font-semibold tracking-tight"
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
