import TopBar from "../../components/common/TopBar";
import PersonalDetailsForm from "../../components/common/PersonalDetailsForm";
import LeftButtonGroup from "../../components/common/UI/LeftButtonGroup";
import { useNavigate } from "react-router-dom";
import Address from "../../components/common/Address";
import EmployeeManagementTab from "../../components/common/EmployeeManagementTab";
import { useState } from "react";

const PersonalInformation = () => {
  const [currentAddress, setCurrentAddress] = useState({
    line1: "",
    line2: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const [permAddress, setPermAddress] = useState({
    line1: "",
    line2: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const [sameAsPresent, setSameAsPresent] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <TopBar
        title="Add Employee"
        showSecondaryButton="true"
        secondaryButtonText="Back to List"
        secondaryButtonClassName="bg-blue-500 text-white hover:bg-white hover:text-blue-500"
        onSecondaryButtonClick={() => navigate("/employee-list")}
      />
      <div>
        <EmployeeManagementTab />
      </div>
      <div className="mt-10">
        <PersonalDetailsForm />
      </div>
      <div className="flex flex-row gap-8 mt-5 mb-3 w-full">
        <div className="w-1/2">
          <Address
            title="Current Address"
            addressData={currentAddress}
            onChange={setCurrentAddress}
          />
        </div>
        <div className="w-1/2">
          <Address
            title="Permanent Address"
            addressData={permAddress}
            onChange={setPermAddress}
            showSameAsCheckbox={true}
            sameAsChecked={sameAsPresent}
            onSameAsChange={(e) => {
              const checked = e.target.checked;
              setSameAsPresent(checked);
              if (checked) {
                setPermAddress(currentAddress); // copy
              } else {
                setPermAddress({
                  line1: "",
                  line2: "",
                  country: "",
                  state: "",
                  city: "",
                  postalCode: "",
                }); // reset
              }
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-start space-x-4 pt-6">
        <LeftButtonGroup
          variant="primary"
          className="bg-[#f79a37] text-white hover:bg-[#ffa23e]"
          children="Save and Next"
          type="button"
          onClick={() => navigate("/company-information")}
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

export default PersonalInformation;
