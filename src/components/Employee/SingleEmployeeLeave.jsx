const leaveBuckets = [
  { title: "Annual Leave", total: 21, available: 16, color: "bg-green-200", text: "Available in Bucket" },
  { title: "Pending Requests", total: 2, available: 2, color: "bg-yellow-200", text: "Leaves pending approval" },
  { title: "Casual Leave", total: 5, available: 4, color: "bg-purple-200", text: "Available in Bucket" },
  { title: "Sick Leave", total: 5, available: 5, color: "bg-pink-200", text: "Available in Bucket" },
  { title: "Earn Leave", total: 7, available: 7, color: "bg-blue-200", text: "Available in Bucket" },
  { title: "Comp Off Leave", total: 1, available: 1, color: "bg-orange-200", text: "Available in Bucket" },
];

const SingleEmpoyeeLeave = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {leaveBuckets.map((leave, idx) => (
        <div
          key={idx}
          className="bg-white border border-blue-300 rounded-xl p-4 flex flex-col items-start justify-between shadow-sm"
        >
          <h3 className="text-gray-600 text-sm font-medium">{leave.title}</h3>
          <p className="text-2xl font-bold text-[#0f172a] mt-1">{leave.total}</p>
          <span className={`${leave.color} text-sm mt-3 px-2 py-1 rounded-xl font-medium text-gray-800`}>
            {leave.available.toString().padStart(2, '0')} {leave.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SingleEmpoyeeLeave;
