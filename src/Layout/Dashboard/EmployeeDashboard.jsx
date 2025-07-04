import SingleEmployeeLeave from "../../components/Employee/SingleEmployeeLeave"
import EmployeeLeave from "../../components/Employee/EmployeeLeave";
import Attendance from "../../components/Employee/Attendance";
import TopBar from "../../components/common/TopBar";

import PeopleIcon from "../../assets/image/people.svg?react";
import DashemployeeIcon from "../../assets/image/dashemployee.svg?react";
import LeaveIcon from "../../assets/image/leave.svg?react";

const EmployeeDashboard = () => {
  const summaryCards = [
    {
      count: 13,
      label: "Present in this month",
      Icon: PeopleIcon,
      iconBg: "bg-[#fff4e8]",
      iconColor: "text-orange-500",
    },
    {
      count: 2,
      label: "Absent in this month",
      Icon: DashemployeeIcon,
      iconBg: "bg-[#edfff2]",
      iconColor: "text-green-500",
    },
    {
      count: 2,
      label: "Leave Request",
      Icon: LeaveIcon,
      iconBg: "bg-[#f9efff]",
      iconColor: "text-[#a601ff]",
    },
  ];

  return (
    <div className="bg-[#f2f7fb] min-h-screen">
     <TopBar
     title="Employee Dashboard"
     showPrimaryButton="true"
     primaryButtonText="New Employee"
     onPrimaryButtonClick={()=> alert("Button Clicked")}

     />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {summaryCards.map((card, i) => (
          <EmployeeLeave key={i} {...card} />
        ))}
      </div>

      {/* Leave Buckets */}
      <div className="p-4">
        <SingleEmployeeLeave />
      </div>

      {/* Attendance Table */}
      <div className="p-4">
        <Attendance />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
