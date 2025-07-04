import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card,Tooltip} from "@material-tailwind/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

// ✅ Import icons
import dashboard from "../../assets/image/dashboard.svg";
import roles_permission from "../../assets/image/role_permission.svg";
import employee from "../../assets/image/employee.svg";
import leave from "../../assets/image/leave.svg";
import attendance from "../../assets/image/attendance.svg";
import payroll from "../../assets/image/payroll.svg";
import company_policies from "../../assets/image/company_policies.svg";
import hrms_setup from "../../assets/image/hrms_setup.svg";
import setting from "../../assets/image/setting.svg";

const Sidebars = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

 const icons = [
  {
    src: dashboard,
    label: "Dashboard", // ✅ Add label
    options: [
      { label: "HR", route: "/dashboard" },
      { label: "Employee", route: "/dashboard/employee" },
    ],
  },
  {
    src: roles_permission,
    label: "Roles & Permissions", // ✅ Add label
    options: [
      { label: "Role List", route: "/rolelist" },
        ],
  },
  {
    src: employee,
    label: "Employee", // ✅ Add label
    options:
    [
      { label: "Employees", route: "/employee-list" },
      { label: "Departments", route: "/dept-list" },
      { label: "Designation", route: "/designation-list" },
        ], 
  },
  {
    src: leave,
    label: "Leave", // ✅ Add label
    options: [
      { label: "Leave Request", route: "/leave-request" },
      { label: "Short Leave Request", route: "/dept-list" },
      { label: "Comp off Request", route: "/designation-list" },
    { label: "WFH Request", route: "/designation-list" },],
  },
  {
    src: attendance,
    label: "Attendance", // ✅ Add label
    options: ["Daily Logs", "Manual Entry", "Reports"],
  },
  {
    src: payroll,
    label: "Payroll", // ✅ Add label
    options: ["Generate Payslip", "Salary Structure", "Bonuses"],
  },
  {
    src: company_policies,
    label: "Company Policies", // ✅ Add label
    options: ["View Policies", "Create Policy", "Archive"],
  },
  {
    src: hrms_setup,
    label: "HRMS Setup", // ✅ Add label
    options: ["Modules", "Workflows", "Automation"],
  },
  {
    src: setting,
    label: "Settings", // ✅ Add label
    options: ["General", "Notifications", "Theme"],
  },
];

  // ✅ Handles icon click — opens panel and navigates only if route exists
  const handleClick = (index, route) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    if (route) navigate(route);
  };

  // ✅ Handles sub-option click if route exists (Dashboard HR/Employee)
  const handleOptionClick = (option) => {
    if (typeof option === "object" && option.route) {
      navigate(option.route);
    }
  };

  return (
    <div className="flex h-screen print:hidden">
      {/* Sidebar with Icons */}
      <Card className="w-20 p-2 shadow-lg shadow-blue-gray-900/10 flex flex-col items-center overflow-y-auto">
        <div className="flex flex-col gap-4 mt-4 w-full items-center">
          {icons.map(({ src, label, route }, index) => (
            <Tooltip key={index} content={label} placement="right">
              <div
                onClick={() => handleClick(index, route)} // ✅ Navigation only for icons with route
                className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-lg transition duration-200"
                style={{
                  backgroundColor:
                    activeIndex === index ? "#26aeff" : "#f8fafc",
                }}
              >
                <img src={src} alt={label} className="h-6 w-6 object-contain" />
              </div>
            </Tooltip>
          ))}
        </div>
      </Card>

      {/* Expandable Panel */}
      {activeIndex !== null && (
        <div className="w-64 bg-white border-l border-gray-200 shadow-inner transition-all duration-300 p-4 relative">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute -right-3 top-4 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100 transition"
          >
            <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
          </button>

          <h2 className="text-xl font-semibold mb-4">
            {icons[activeIndex].label}
          </h2>

          <ul className="space-y-4">
            {icons[activeIndex].options.map((item, idx) => (
              <li
                key={idx}
                // ✅ Sub-options with route will navigate
                onClick={() => handleOptionClick(item)}
                className="text-md text-gray-700 hover:text-black cursor-pointer"
              >
                {typeof item === "string" ? item : item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebars;
