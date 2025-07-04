import { useState } from "react";

const tabs = ["Leave Request", "Short Leave", "Comp off Request", "WFH Request"];

const requestData = {
  "Leave Request": [
    {
      employee: "Vishal Saraiwal",
      type: "Sick Leave",
      start: "15 May , 2025",
      end: "16 May , 2025",
      days: "02",
      status: "Pending",
    },
    {
      employee: "Vishal Saraiwal",
      type: "Casual Leave",
      start: "05 May , 2025",
      end: "05 May , 2025",
      days: "01",
      status: "Pending",
    },
  ],
  "Short Leave": [
    {
      employee: "Anjali Mehta",
      type: "Short Leave",
      start: "12 May , 2025",
      end: "12 May , 2025",
      days: "0.5",
      status: "Approved",
    },
  ],
  "Comp off Request": [
    {
      employee: "Ravi Sharma",
      type: "Comp Off",
      start: "02 May , 2025",
      end: "03 May , 2025",
      days: "02",
      status: "Rejected",
    },
  ],
  "WFH Request": [
    {
      employee: "Priya Singh",
      type: "WFH",
      start: "10 May , 2025",
      end: "12 May , 2025",
      days: "03",
      status: "Pending",
    },
  ],
};

const Dashtabs = () => {
  const [activeTab, setActiveTab] = useState("Leave Request");
  const currentData = requestData[activeTab] || [];

  return (
    <div className="bg-[#f7fafd] min-h-screen p-4 sm:p-6">
      {/* Tabs */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition ${
                activeTab === tab
                  ? "bg-[#3498db] text-white"
                  : "text-gray-800 hover:text-[#3498db]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table Card */}
      <div className="max-w-6xl mx-auto bg-white p-4 rounded shadow cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Pending {activeTab}
          </h2>
          <button className="border px-4 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-[#0f172a] text-white text-left">
                <th className="p-3 font-medium">Employee</th>
                <th className="p-3 font-medium">Leave Type</th>
                <th className="p-3 font-medium">Start Date</th>
                <th className="p-3 font-medium">End Date</th>
                <th className="p-3 font-medium text-center">No. of Days</th>
                <th className="p-3 font-medium">Status</th>
                <th className="p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50 last:border-b-0"
                >
                  <td className="p-3 text-blue-600 hover:underline cursor-pointer whitespace-nowrap">
                    {item.employee}
                  </td>
                  <td className="p-3 whitespace-nowrap">{item.type}</td>
                  <td className="p-3 whitespace-nowrap">{item.start}</td>
                  <td className="p-3 whitespace-nowrap">{item.end}</td>
                  <td className="p-3 text-center">{item.days}</td>
                  <td className="p-3">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm font-medium">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 space-x-2">
                    <button className="bg-green-200 text-green-800 px-3 py-1 rounded-md text-sm hover:bg-green-300 transition">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {currentData.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              No data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashtabs;
