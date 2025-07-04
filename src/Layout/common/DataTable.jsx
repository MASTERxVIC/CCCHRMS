import React, { useState, useMemo } from "react";
import {
  PencilIcon,
  TrashIcon,
  EyeIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

const DataTable = ({
  columns = [],
  data = [],
  title = "All Employees",
  onActionClick = () => {}, // default is no-op
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredData = useMemo(() => {
    if (!Array.isArray(data) || !Array.isArray(columns)) return [];

    return data.filter((item) =>
      columns.some((col) =>
        item[col.accessor]
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [search, data, columns]);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-white p-4 rounded-md w-full mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
        <h2 className="text-2xl font-semibold text-gray-800"> {title} </h2>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Here..."
            className="px-4 py-2 border rounded text-sm w-full md:w-64 focus:outline-none focus:ring focus:border-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FunnelIcon className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-400" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-900 text-white text-sm">
              {columns.map((col, idx) => (
                <th key={idx} className="text-left px-4 py-3 whitespace-nowrap">
                  {col.name}
                </th>
              ))}
              <th className="text-left px-4 py-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr
                key={idx}
                className=" text-sm text-gray-700 hover:bg-gray-100"
              >
                {columns.map((col, i) => (
                  <td
                    key={i}
                    className={`px-4 py-2 whitespace-nowrap ${
                      col.accessor === "serial" ||
                      col.accessor === "totalemployee"
                        ? "text-center"
                        : "text-left"
                    }`}
                  >
                    {row[col.accessor]}
                  </td>
                ))}
                <td className="px-4 py-2 whitespace-nowrap flex gap-2">
                  <EyeIcon
                    className="h-5 w-5 text-blue-500 cursor-pointer"
                    onClick={() => onActionClick(row, "view")}
                  />
                  <PencilIcon
                    className="h-5 w-5 text-green-500 cursor-pointer"
                    onClick={() => onActionClick(row, "edit")}
                  />
                  <TrashIcon
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={() => onActionClick(row, "delete")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          {`1-${paginatedData.length} of ${filteredData.length} items`}
        </p>

        <div className="flex justify-center items-center gap-x-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="border rounded px-4 py-1 text-sm disabled:opacity-50"
          >
            ‹ Prev
          </button>
          <span className="px-4 py-1 border rounded text-sm">{page}</span>
          <button
            disabled={page === pageCount}
            onClick={() => setPage((prev) => prev + 1)}
            className="border rounded px-4 py-1 text-sm disabled:opacity-50"
          >
            Next ›
          </button>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="ml-2 border px-2 py-1 text-sm rounded"
          >
            {[5, 10, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="text-sm ml-1">Items per page</span>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
