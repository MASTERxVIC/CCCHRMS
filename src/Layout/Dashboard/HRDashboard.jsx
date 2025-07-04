import EmployeeCard from "../../components/Employee/EmployeeLeave";
import CircularProgressBar from "../../components/Employee/CircularProgressBar";
import Dashtabs from "../../components/common/Dashtabs";
import TopBar from "../../components/common/TopBar";

import PeopleIcon from "../../assets/image/people.svg?react";
import DashemployeeIcon from "../../assets/image/dashemployee.svg?react";
import LeaveIcon from "../../assets/image/leave.svg?react";
import AttendanceIcon from "../../assets/image/attendance.svg?react";

const HRDashboard = () => {
  const cards = [
    {
      count: 156,
      label: "Total Employees",
      change: "05",
      Icon: DashemployeeIcon,
      iconBg: "bg-[#fff4e8]",
      iconColor: "text-red-500",
    },
    {
      count: 34,
      label: "On Leave",
      change: "02",
      Icon: LeaveIcon,
      iconBg: "bg-[#f9efff]",
      iconColor: "text-[#a601ff]",
    },
    {
      count: 22,
      label: "Attendance Marked",
      change: "04",
      Icon: AttendanceIcon,
      iconBg: "bg-[#e7f5ff]",
      iconColor: "text-[#42beff]",
    },
    {
      count: 12,
      label: "New Joiners",
      change: "01",
      Icon: PeopleIcon,
      iconBg: "bg-[#edfff2]",
      iconColor: "text-green-500",
    },
  ];

  return (
    <>
      <TopBar
        title="HR Dashboard"
        description="Good Morning, here’s what’s going on today"
        showPrimaryButton={true}
        primaryButtonText="New Employee"
        onPrimaryButtonClick={() => alert("Button clicked")}
      />
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* Left: Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
          {cards.map((card, index) => (
            <EmployeeCard key={index} {...card} />
          ))}
        </div>

        {/* Right: Employment Split Card */}
        <div className="bg-white rounded-lg shadow-md p-6 h-full flex items-center justify-center">
          <CircularProgressBar />
        </div>
      </div>
      <div>
        <Dashtabs />
      </div>
    </>
  );
};

export default HRDashboard;
