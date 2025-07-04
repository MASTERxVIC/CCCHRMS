// src/components/layouts/LeaveLayout.jsx
import Header from "../components/common/Header";

import ProfileBottomNav from "../components/common/ProfileBottomNav";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header
        name="Vishal Saraiwa"
        employeeId="CCC02072"
        optionalButton={
          <button
            onClick={() => console.log("Edit clicked")}
            className="cursor-pointer bg-white text-sm text-black px-3 py-1 rounded shadow-sm flex items-center gap-1"
          >
            <PencilIcon className="h-4 w-4" />
            Edit
          </button>
        }
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebars />
        <div className="flex-1 overflow-auto p-4 bg-[#f2f7fb]">{children}</div>
      </div>
      <ProfileBottomNav />
    </div>
  );
}
