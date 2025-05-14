
const Table = ({users}) => {
  return (
    <>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidde">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              username
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {
            users && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index }>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.fullname}
                 </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.email}
                 </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.username}
                 </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.phone}
                 </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.role}
                 </td>
                </tr>
              ))
            ):(
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    No users found.
              </td>
            )
          }
        </tbody>
      </table>
    </>
  );
};

export default Table;
