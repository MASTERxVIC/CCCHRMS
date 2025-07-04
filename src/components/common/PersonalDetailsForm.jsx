import React, { useState } from "react";

const PersonalDetailsForm = () => {
  const [fields, setFields] = useState([
    { label: "Employee ID", type: "text", value: "#CCC00272", readOnly: true },
    { label: "First Name", type: "text" },
    { label: "Last Name", type: "text" },
    { label: "Phone", type: "text" },
    { label: "Email Id", type: "email" },
    { label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
    { label: "Actual DOB", type: "date" },
    { label: "Documented DOB", type: "date" },
    { label: "Passport Size Photo", type: "file", name: "passport" },
    { label: "Profile Photo", type: "file", name: "profile" },
  ]);

  const [credentials] = useState([
    { label: "Official Email Id", type: "email" },
    { label: "Password", type: "password" },
  ]);

  const [companyDetails] = useState([
    { label: "Select Branch", type: "select", options: ["Branch 1", "Branch 2"] },
    { label: "Select Department", type: "select", options: ["Dept 1", "Dept 2"] },
    { label: "Select Designation", type: "select", options: ["Designation 1", "Designation 2"] },
    { label: "Shift", type: "select", options: ["Morning", "Evening"] },
    { label: "Reporting Manager", type: "select", options: ["Manager A", "Manager B"] },
    { label: "Employment Type", type: "select", options: ["Full-Time", "Part-Time"] },
  ]);

  const [isManager, setIsManager] = useState(false);

  return (
    <div className="space-y-8 pb-5">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Personal Details */}
        <div className="lg:w-1/2 w-full px-6 py-5 bg-white shadow-sm rounded-lg">
          <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">
            Personal Detail
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font--normal mb-1">
                  {field.label} <span className="text-red-500">*</span>
                </label>

                {field.type === "select" ? (
                  <select className="w-full border rounded px-3 py-2">
                    <option>Select {field.label}</option>
                    {field.options.map((opt, i) => (
                      <option key={i}>{opt}</option>
                    ))}
                  </select>
                ) : field.type === "date" ? (
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : field.type === "file" ? (
                  <label className="cursor-pointer border-dashed border-2 border-gray-300 rounded p-4 flex flex-col items-center hover:bg-gray-100 transition">
                    <span className="text-3xl text-blue-500">+</span>
                    <span className="text-sm text-gray-700">{field.label}</span>
                    <input type="file" name={field.name} className="hidden" />
                  </label>
                ) : (
                  <input
                    type={field.type}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue={field.value}
                    readOnly={field.readOnly}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Credentials + Company Details */}
        <div className="lg:w-1/2 w-full space-y-8">
          <div className="px-6 py-5 bg-white shadow-sm rounded-lg">
            <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">
              Employee Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font--normal mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type={field.type}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 py-5 bg-white shadow-sm rounded-lg">
            <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2 mb-4">
              Company Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyDetails.map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font--normal mb-1">
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
              <div className="col-span-1 flex items-center space-x-2">
                <label className="block text-sm font--normal mb-1">
                  Is Manager <span className="text-red-500">*</span>
                </label>
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isManager}
                    onChange={() => setIsManager(!isManager)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
