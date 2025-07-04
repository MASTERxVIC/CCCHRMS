import TopBar from "../../components/common/TopBar";
import LeftButtonGroup from "../../components/common/UI/LeftButtonGroup";
import { useNavigate } from "react-router-dom";
import EmployeeManagementTab from "../../components/common/EmployeeManagementTab";
import React, { useState } from "react";
import { Upload } from "lucide-react";

const UploadDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([{ type: "", file: "" }]);

  const handleAddDocument = () => {
    setDocuments([...documents, { type: "", file: "" }]);
  };

  const handleRemoveDocument = (index) => {
    if (documents.length === 1) return; // Prevent all rows from being deleted
    const updated = [...documents];
    updated.splice(index, 1);
    setDocuments(updated);
  };

  return (
    <div>
      <TopBar
        title="Documents"
        showSecondaryButton={true}
        secondaryButtonText="Back to List"
        secondaryButtonClassName="bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer"
        onSecondaryButtonClick={() => navigate("/employee-list")}
      />

      <EmployeeManagementTab />

      <div className="bg-white p-4 sm:p-6 rounded-md shadow-sm border border-gray-200 mt-10">
        {/* Section Header */}
        <div className="border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2">
            Documents
          </h2>
        </div>

        {/* Aadhar & PAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <FileInput label="Upload Aadhar card" required />
          <FileInput label="Upload PAN card" required />
        </div>

        {/* Dynamic Documents */}
        {documents.map((doc, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end mb-4"
          >
            {/* Document Type */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Document Type
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">Upload Document Type</option>
                <option value="offer">Offer Letter</option>
                <option value="relieving">Relieving Letter</option>
                <option value="experience">Experience Certificate</option>
              </select>
            </div>

            {/* Upload File */}
            <FileInput label="Upload Document" />

            {/* Add / Remove Buttons */}
        <div className="flex justify-start mt-1 lg:mt-6 space-x-3">
  {documents.length > 1 && (
    <button
      type="button"
      onClick={() => handleRemoveDocument(index)}
      className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
    >
      Remove
    </button>
  )}
  {index === documents.length - 1 && (
    <button
      type="button"
      onClick={handleAddDocument}
      className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded cursor-pointer"
    >
      Add Document
    </button>
  )}
</div>

          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-start gap-4 mt-10">
        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white transition"
          children="Previous"
          type="button"
          onClick={() => navigate("/financial-information")}
        />

        <LeftButtonGroup
          variant="primary"
          className="bg-[#f79a37] text-white hover:bg-[#ffa23e]"
          children="Submit Final"
          type="button"
          onClick={() => {
            alert("Submitted Successfully");
            navigate("/employee-list"); // <-- Your desired page
          }}
        />

        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white transition"
          children="Save Draft"
          type="button"
          onClick={() => alert("Draft Saved")}
        />

        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white"
          children="Cancel"
          type="button"
          onClick={() => navigate("/quick-addemployee")}
        />
      </div>
    </div>
  );
};

// Reusable File Input Component
const FileInput = ({ label, required = false }) => (
  <div>
    <label className="block text-sm font-medium mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type="file"
        className="w-full border border-gray-300 rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Upload className="absolute right-3 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
  </div>
);

export default UploadDocuments;
