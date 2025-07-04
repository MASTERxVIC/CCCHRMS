const EmployeeLeave = ({ count, label, change, image, Icon, iconBg, iconColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between sm:flex-row items-center gap-4 sm:gap-0 sm:items-start w-full max-w-sm">
      <div className="flex-1">
        <div className="text-4xl font-semibold text-gray-800">{count}</div>
        <div className="text-lg font-medium text-gray-600 mt-1">{label}</div>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <svg
            className="w-4 h-4 text-green-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 10a1 1 0 012 0v3h6v-3a1 1 0 112 0v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <span className="font-medium text-gray-700">{change}</span> more than last Month
          </span>
        </div>
      </div>

      {/* Right: Icon */}
      <div className={`flex-shrink-0 ${iconBg} rounded-full p-4`}>
        {Icon ? (
          <Icon className={`w-8 h-8 ${iconColor}`} />
        ) : (
          <img src={image} alt="icon" className="w-8 h-8" />
        )}
      </div>
    </div>
  );
};

export default EmployeeLeave;
