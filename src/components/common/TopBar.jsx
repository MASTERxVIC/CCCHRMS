import {
  PlusIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

const TopBar = ({
  title = "Dashboard",
  description,

  showPrimaryButton = false,
  primaryButtonText = "New Employee",
  onPrimaryButtonClick,

  showSecondaryButton = false,
  secondaryButtonText = "View Archive",
  onSecondaryButtonClick,
  secondaryButtonClassName = "bg-red",

  showExportButton = false,
  onExport,

  showImportButton = false,
  onImport,

  showClose = false,
  onClose,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 md:p-6 bg-[#f2f7fb] border-b border-gray-300 relative">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        {description && (
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        {showPrimaryButton && (
          <button
            onClick={onPrimaryButtonClick}
            className="flex items-center gap-2 px-4 py-2 font- bg-blue-600 text-white rounded hover:bg-green-500 transition text-sm cursor-pointer shadow-sm"
          >
            <PlusIcon className="h-5 w-5" />
            {primaryButtonText}
          </button>
        )}

        {showSecondaryButton && (
          <button
            onClick={onSecondaryButtonClick}
            className={`px-4 py-2  rounded transition text-sm cursor-pointer shadow-sm ${secondaryButtonClassName}`} 
          >
            {secondaryButtonText}
          </button>
        )}

        {showExportButton && typeof onExport === "function" && (
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded hover:bg-black hover:text-white transition text-sm cursor-pointer shadow-sm"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
          </button>
        )}

          {showImportButton && typeof onImport === "function" && (
          <button
            onClick={onImport}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded hover:bg-black hover:text-white transition text-sm cursor-pointer shadow-sm"
          >
            <ArrowUpTrayIcon className="h-5 w-5" />
          </button>
        )}


        {showClose && (
          <button
            onClick={onClose}
            className="text-blue-700 bg-gray-200 hover:bg-blue-700 hover:text-white transition p-1 cursor-pointer rounded shadow-sm"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TopBar;
