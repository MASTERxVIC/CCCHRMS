import React, { useState } from "react";
import TopBar from "../../components/common/TopBar";
import EmployeeManagementTab from "../../components/common/EmployeeManagementTab";
import LeftButtonGroup from "../../components/common/UI/LeftButtonGroup";
import { useNavigate } from "react-router-dom";

const CompanyInformation = () => {
      const navigate = useNavigate();

  const [companyDetails] = useState([
    {
      label: "Select Branch",
      type: "select",
      options: ["Branch 1", "Branch 2"],
    },
    {
      label: "Select Department",
      type: "select",
      options: ["Dept 1", "Dept 2"],
    },
    {
      label: "Select Designation",
      type: "select",
      options: ["Designation 1", "Designation 2"],
    },
    { label: "Shift", type: "select", options: ["Morning", "Evening"] },
    {
      label: "Reporting Manager",
      type: "select",
      options: ["Manager A", "Manager B"],
    },
    {
      label: "Employment Type",
      type: "select",
      options: ["Full-Time", "Part-Time"],
    },
  ]);

  const [noticeDetails] = useState([
    {
      label: "Notice Period Status",
      type: "select",
      options: ["Active", "Inactive"],
    },
    { label: "Start Date", type: "date" },
    { label: "End Date", type: "date" },
  ]);

  const [isManager, setIsManager] = useState(false);

  return (
    <div>
        <TopBar
        title="Company Details"
        showSecondaryButton="true"
        secondaryButtonText="Back to List"
        secondaryButtonClassName="bg-blue-500 text-white hover:bg-white hover:text-blue-500"
        onSecondaryButtonClick={() => navigate("/employee-list")}
        />
        <div>
        <EmployeeManagementTab />
      </div>
      {/* Company and Notice Details Side-by-Side */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch mt-10">
        {/* Company Details */}
        <div className="w-full lg:w-1/2">
          <div className="h-full px-6 py-5 bg-white shadow-sm rounded-lg">
            <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">
              Company Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyDetails.map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select {field.label}</option>
                    {field.options.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
              <div className="col-span-1 flex items-center space-x-3 mt-2">
                <label className="block text-sm mb-1">
                  Is Manager <span className="text-red-500">*</span>
                </label>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isManager}
                    onChange={() => setIsManager(!isManager)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notice Period Details */}
        <div className=" w-full lg:w-1/2">
          <div className="h-full px-6 py-5 bg-white shadow-sm rounded-lg">
            <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">
              Notice Period Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {noticeDetails.map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  {field.type === "select" ? (
                    <select className="w-full border rounded px-3 py-2">
                      <option>Select {field.label}</option>
                      {field.options.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* REMARK SECTION */}
      <div className="px-6 py-5 mt-10 bg-white shadow-sm rounded-lg">
        <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">
          Remark
        </h2>
        <div>
          <label className="block text-sm mb-1">Any Remark</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
            placeholder="Type remark"
          ></textarea>
        </div>
      </div>
       <div className="flex justify-start space-x-4 mt-10">
         <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white transition"
          children="Previous"
          type="button"
          onClick={() => navigate("/personal-information")}
        ></LeftButtonGroup>

        <LeftButtonGroup
          variant="primary"
          className="bg-[#f79a37] text-white hover:bg-[#ffa23e]"
          children="Save and Next"
          type="button"
          onClick={() => navigate("/pro-information")}
        ></LeftButtonGroup>

        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white transition"
          children="Save Draft"
          type="button"
          onClick={() => alert("Draft Saved")}
        ></LeftButtonGroup>

        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white"
          children="Cancel"
          type="button"
          onClick={() => navigate("/quick-addemployee")}
        ></LeftButtonGroup>
      </div>
    </div>
  );
};

export default CompanyInformation;
