import PersonalDetailsForm from "../../components/common/PersonalDetailsForm";
import TopBar from "../../components/common/TopBar";
import LeftButtonGroup from "../../components/common/UI/LeftButtonGroup";

import { useNavigate } from "react-router-dom";

const QuickAddEmployee = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TopBar
        title="Quick Add Employee"
        showSecondaryButton="true"
        secondaryButtonText="Back to List"
        secondaryButtonClassName="bg-blue-500 text-white hover:bg-white hover:text-blue-500"
        onSecondaryButtonClick={() => navigate("/employee-list")}
      />

      <div className="mt-10">
        <PersonalDetailsForm />
      </div>
          {/* Action Buttons */}
      <div className="flex justify-start space-x-4 pt-6">

        <LeftButtonGroup
          variant="primary"
          className="bg-[#f79a37] text-white hover:bg-[#ffa23e]"
          children="Add Employee"
          type="button"
          onClick={()=> navigate("/employee-list")} 
        ></LeftButtonGroup>

        <LeftButtonGroup
          variant="primary"
          className="bg-white text-black px-6 py-2 rounded outline-1 outline-gray-200 hover:bg-gray-500 hover:text-white"
          children="Cancel"
          type="button"
        ></LeftButtonGroup>
      </div>
    </div>
  );
};

export default QuickAddEmployee;
