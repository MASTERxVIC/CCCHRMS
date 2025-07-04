
const ButtonGroup = ({
  primaryText = "Save",
  secondaryText = "Cancel",
  onPrimaryClick,
  onSecondaryClick,
  primaryClass = "bg-blue-600 text-white hover:bg-blue-700",
  secondaryClass = "bg-gray-200 text-gray-800 hover:bg-gray-300",
}) => {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onPrimaryClick}
        className={`px-4 py-2 rounded ${primaryClass}`}
      >
        {primaryText}
      </button>
      <button
        onClick={onSecondaryClick}
        className={`px-4 py-2 rounded ${secondaryClass}`}
      >
        {secondaryText}
      </button>
    </div>
  );
};

export default ButtonGroup;
