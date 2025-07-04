export default function InfoCard({ title, extraContent = null, children }) {
  return (
    <div className="bg-white rounded shadow-sm p-4 w-full">
      <h3 className="text-sm font-semibold border-l-4 border-blue-500 pl-2 mb-4">
        {title}
      </h3>

      {/* Optional Extra Content (like photos) */}
      {extraContent && (
        <div className="mb-4">
          {extraContent}
        </div>
      )}

      <div className="space-y-2 text-sm text-gray-700">
        {children}
      </div>
    </div>
  );
}
