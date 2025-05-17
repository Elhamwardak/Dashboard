const Table = ({ columns = [], data = [] ,title }) => {
  return (
    <>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1 border border-blue-100 rounded-xl p-4 overflow-x-auto">
          <h3 class="text-lg font-semibold text-blue-700 mb-4">
            {title}
          </h3>
          <table class="min-w-full bg-white text-sm">
            <thead className="bg-blue-100 text-blue-800 text-left">
              <tr>
                {columns && columns.length > 0 ? (
                  columns.map((column, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-sm font-bold  tracking-wider"
                    >
                      {column.header}
                    </th>
                  ))
                ) : (
                  <th className="px-6 py-3 text-left text-sm font-bold  tracking-wider">
                    No columns defined
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data && data.length > 0 ? (
                data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center"
                  >
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
