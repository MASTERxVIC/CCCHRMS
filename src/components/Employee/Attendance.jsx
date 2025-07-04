const rows = [
  { date: "12 May , 2025", shift: "General", inTime: "10:00 AM", outTime: "--", early: "00", late: "--", hours: "--", status: "Present" },
  { date: "09 May , 2025", shift: "General", inTime: "09:55 AM", outTime: "19:15 PM", early: "00:05", late: "00:15", hours: "9.2", status: "Present" },
  { date: "08 May , 2025", shift: "General", inTime: "--", outTime: "--", early: "--", late: "--", hours: "--", status: "Absent" },
  { date: "07 May , 2025", shift: "General", inTime: "--", outTime: "--", early: "--", late: "--", hours: "--", status: "Absent" },
  { date: "06 May , 2025", shift: "General", inTime: "09:55 AM", outTime: "19:15 PM", early: "00:05", late: "00:15", hours: "9.2", status: "Present" },
];

const Attendance = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded shadow p-4 overflow-x-auto cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Monthly Attendance View</h2>
        <button className="border px-4 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100">
          View All
        </button>
      </div>

      <table className="w-full table-auto border-collapse text-sm sm:text-base text-left">
        <thead>
          <tr className="bg-[#0f172a] text-white">
            <th className="p-3">Date</th>
            <th className="p-3">Shift</th>
            <th className="p-3">In-Time</th>
            <th className="p-3">Out-Time</th>
            <th className="p-3">Shift Early</th>
            <th className="p-3">Shift Late</th>
            <th className="p-3">Working Hours</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 last:border-b-0">
              <td className="p-3 whitespace-nowrap">{r.date}</td>
              <td className="p-3 whitespace-nowrap">{r.shift}</td>
              <td className="p-3 whitespace-nowrap">{r.inTime}</td>
              <td className="p-3 whitespace-nowrap">{r.outTime}</td>
              <td className="p-3 whitespace-nowrap">{r.early}</td>
              <td className="p-3 whitespace-nowrap">{r.late}</td>
              <td className="p-3 whitespace-nowrap">{r.hours}</td>
              <td className="p-3 whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    r.status === "Present"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {rows.length === 0 && (
        <div className="text-center text-gray-500 py-4">
          No attendance records available
        </div>
      )}
    </div>
  );
};

export default Attendance;
