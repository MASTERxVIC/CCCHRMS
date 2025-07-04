import TopBar from "../../components/common/TopBar";
import LeftButtonGroup from "../../components/common/UI/LeftButtonGroup";
import { useNavigate } from "react-router-dom";
import EmployeeManagementTab from "../../components/common/EmployeeManagementTab";
import { ChevronDown } from "lucide-react";

const FinancialInformation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar
        title="Financial Details"
        showSecondaryButton={true}
        secondaryButtonText="Back to List"
        secondaryButtonClassName="bg-blue-500 text-white hover:bg-white hover:text-blue-500 cursor-pointer"
        onSecondaryButtonClick={() => navigate("/employee-list")}
      />

      <EmployeeManagementTab />

      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        {/* Salary Information */}
        <div className="bg-white shadow-sm rounded-md flex-1 p-4 sm:p-6">
          <div className="border-b pb-2 mb-4">
            <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2">
              Salary Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="CTC" placeholder="Enter CTC Amount" required />
            <InputField label="Monthly Gross Salary" placeholder="Enter Monthly Gross Salary" required />
            <InputField label="Monthly Working Hours" placeholder="Enter Monthly Working" required />

            {/* Currency Dropdown */}
            <div>
              <label className="text-sm block mb-1">
                Currency <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded px-3 py-2 appearance-none">
                  <option value="">Select Currency</option>
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <InputField label="Billability(%)" placeholder="Enter Billability" />
            <InputField label="Hourly Rate" placeholder="Enter Hourly Rate" />
          </div>
        </div>

        {/* Bank Details */}
        <div className="bg-white rounded-md flex-1 p-4 sm:p-6 shadow-sm">
          <div className="border-b pb-2 mb-4">
            <h2 className="text-lg font-semibold border-l-4 border-blue-500 pl-2">
              Bank Details
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <InputField label="Bank Name" placeholder="Enter Bank Name" required />
            </div>
            <InputField label="Account Number" placeholder="Enter Account Number" required />
            <InputField label="IFSC Code" placeholder="Enter IFSC Code" required />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-start gap-4 mt-10">
        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white transition"
          children="Previous"
          type="button"
          onClick={() => navigate("/pro-information")}
        />

        <LeftButtonGroup
          variant="primary"
          className="bg-[#f79a37] text-white hover:bg-[#ffa23e]"
          children="Save and Next"
          type="button"
          onClick={() => navigate("/upload-documents")}
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

// Reusable Input Field Component
const InputField = ({ label, placeholder, required = false }) => (
  <div>
    <label className="text-sm block mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded px-3 py-2"
    />
  </div>
);

export default FinancialInformation;
