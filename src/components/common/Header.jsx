import { PrinterIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Header({
  name = "",
  employeeId = "",
  optionalButton = null, // ✅ Accept optional button as a prop
}) {
  const navigate = useNavigate();

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="bg-[#111827] text-white px-4 py-3 flex flex-wrap items-center justify-between">
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center">
          {initials}
        </div>
        <div className="text-sm">
          <span>{name}</span>
          <span className="ml-2 text-blue-400 font-medium">
            | #{employeeId}
          </span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex gap-2 mt-2 md:mt-0 print:hidden">
        <button
          onClick={() => window.print()}
          className="cursor-pointer bg-gradient-to-l from-blue-400 to-blue-500 text-sm text- px-3 py-1 rounded shadow-sm flex items-center gap-1"
        >
          
          Print
          <PrinterIcon className="h-4 w-4" />
        </button>

        {/* ✅ Optional Button rendered only if passed */}
        {optionalButton}

        <button
          onClick={() => navigate("/Dashboard")}
          className="cursor-pointer text-black bg-white text-sm px-3 py-1 rounded shadow-sm flex items-center gap-1"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
