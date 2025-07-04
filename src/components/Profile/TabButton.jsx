export default function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-4 py-1 text-sm font-medium rounded-md focus:outline-none ${
        active ? "bg-blue-500 text-white " : " text-gray-700"
      }`}
    >
      {label}
    </button>
  );
}