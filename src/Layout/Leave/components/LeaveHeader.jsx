import React from "react";
import { X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { name: "Leaves", path: "/leaves" },
  { name: "Attendance", path: "/attendance" },
  { name: "Pay Slips", path: "/pay-slips" },
  { name: "Documents", path: "/documents" },
];

const LeaveHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white px-4 py-3 rounded-b-md shadow-sm border border-t-0 border-gray-200">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Left Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 cursor-pointer"
        >
          <X size={16} />
          Close this
        </button>

        {/* Right Tabs */}
        <div className="flex flex-wrap justify-end gap-3">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <button
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`px-4 py-2 text-sm font-medium rounded border ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white"
                    : "text-gray-800 border-gray-300 hover:bg-gray-100"
                } cursor-pointer`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaveHeader;
