import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileBottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-4 py-3 rounded-b-md shadow-sm border border-t-0 border-gray-200">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Left Button */}
        <button
          className="cursor-pointer flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
          onClick={() => navigate("/more-info")}
        >
          <Plus size={16} /> More Info
        </button>

        {/* Right Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          <button
            className="cursor-pointer border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
            onClick={() => navigate("/leaves")}
          >
            Leaves
          </button>
          <button
            className="cursor-pointer border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
            onClick={() => navigate("/attendance")}
          >
            Attendance
          </button>
          <button
            className="cursor-pointer border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
            onClick={() => navigate("/pay-slips")}
          >
            Pay Slips
          </button>
          <button
            className="cursor-pointer border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
            onClick={() => navigate("/documents")}
          >
            Documents
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBottomNav;
