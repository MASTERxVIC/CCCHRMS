import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/common/TopBar";
import EmployeeManagementTab from "../../components/common/EmployeeManagementTab";
import DynamicInputSection from "../../components/common/UI/DynamicInputSection";
import LeftButtonGroup from "../../components/common/UI/LeftButtonGroup";

const ProInformation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar
        title="Professional Details"
        showSecondaryButton={true}
        secondaryButtonText="Back to List"
        secondaryButtonClassName="bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer"
        onSecondaryButtonClick={() => navigate("/employee-list")}
      />

      <div>
        <EmployeeManagementTab />
      </div>
      <div className="bg-white shadow-sm rounded-lg mt-10 p-6 border border-gray-200">
        {/* Header */}
        <div className="border-b pb-2 mb-4 flex items-center ">
          <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2">
            Professional Details
          </h2>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            <input
              type="text"
              placeholder="Enter Experience (Years)"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Source of Hire */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Source of Hire <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Select Source of Hire</option>
                <option value="Referral">Referral</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Job Portal">Job Portal</option>
              </select>
              <ChevronDown className="absolute top-2.5 right-3 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Probation Period */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Probation Period
            </label>
            <input
              type="text"
              placeholder="Enter Duration (Months)"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Probation End Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Probation End Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <CalendarDays className="absolute top-2.5 right-3 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Tentative Joining Date */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Tentative Joining Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <CalendarDays className="absolute top-2.5 right-3 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 mt-10">
        {/* Education Section */}
        <DynamicInputSection
          title="Education"
          addButtonLabel="Add Row"
          fields={[
            {
              name: "schoolName",
              label: "School Name",
              placeholder: "Enter School Name",
              type: "text",
            },
            {
              name: "degree",
              label: "Degree/Diploma",
              placeholder: "Enter Degree/Diploma",
              type: "text",
            },
            {
              name: "fieldOfStudy",
              label: "Field(s) of Study",
              placeholder: "Enter Field(s) of Study",
              type: "text",
            },
            {
              name: "yearOfCompletion",
              label: "Year of Completion",
              placeholder: "Enter Year",
              type: "text",
            },
          ]}
        />

        {/* Experience Section */}
        <DynamicInputSection
          title="Experience"
          addButtonLabel="Add Row"
          fields={[
            {
              name: "occupation",
              label: "Occupation",
              placeholder: "Enter Occupation",
              type: "text",
            },
            {
              name: "company",
              label: "Company",
              placeholder: "Enter Company",
              type: "text",
            },
            {
              name: "duration",
              label: "Duration",
              placeholder: "Enter Duration",
              type: "text",
            },
            {
              name: "lastWorking",
              label: "Last Working MM/YYYY",
              placeholder: "MM/YYYY",
              type: "date",
            },
          ]}
        />

        {/* Certifications Section */}
        <DynamicInputSection
          title="Certifications"
          addButtonLabel="Add Row"
          fields={[
            {
              name: "title",
              label: "Certificate Title",
              placeholder: "Enter Title",
              type: "text",
            },
            {
              name: "skills",
              label: "Related Skills",
              placeholder: "Enter Skills",
              type: "text",
            },
            {
              name: "validTill",
              label: "Valid Till",
              placeholder: "",
              type: "date",
            },
            {
              name: "certificateFile",
              label: "Upload Certificate",
              placeholder: "",
              type: "file",
            },
          ]}
        />
      </div>
      <div className="flex justify-start space-x-4 mt-10">
        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white transition"
          children="Previous"
          type="button"
          onClick={() => navigate("/company-information")}
        ></LeftButtonGroup>

        <LeftButtonGroup
          variant="primary"
          className="bg-[#f79a37] text-white hover:bg-[#ffa23e]"
          children="Save and Next"
          type="button"
          onClick={() => navigate("/financial-information")}
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

export default ProInformation;
