import { useState, useEffect } from "react";
import AttendanceDetails from "./AttendanceDetails";
import Icon from "../components/icons/Icons";
import PieChart from "../components/pichart/PieChart";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Attendance = ({ onBack}) => {
  const { data, error } = useSWR("/db.json", fetcher);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  
  const departments = data?.departments || [];
  const users = data?.users || [];

   

  useEffect(() => {
    if (!data) return;
    const result = users.filter((user) =>
      selectedDepartments.includes(user.departmentId)
    );
    setFilteredUsers(result);
  }, [selectedDepartments, users, data]);

  if (showDetails) {
    return <AttendanceDetails onback={() => setShowDetails(false)}/>
  }

  const handleDepartmentChange = (e) => {
    const { id, checked } = e.target;
    setSelectedDepartments((prev) =>
      checked ? [...prev, id] : prev.filter((deptId) => deptId !== id)
    );
  };

  if (error)
    return (
      <div className="p-10 text-red-600 font-semibold">
        Failed to load data.
      </div>
    );

  if (!data)
    return (
      <div className="p-10 text-blue-600 font-semibold">Loading data...</div>
    );

  return (
    <>
      <div className="space-y-4 px-10 py-5">
        <div
          className="w-10 flex justify-center items-center h-10 mb-4 text-blue-600 border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          onClick={onBack}
        >
          <Icon icon="back" />
        </div>

        <div className="flex flex-wrap gap-7">
          <div className="flex flex-col w-full lg:w-90 gap-5">
            <div className="w-full p-6 bg-white rounded-2xl shadow-md">
              <PieChart />
            </div>
            <div className="border py-10 px-6 border-blue-100 rounded-xl bg-blue-50">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">
                Departments
              </h3>
              <form className="space-y-3">
                {departments.map((dept) => (
                  <div key={dept.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={dept.id}
                      onChange={handleDepartmentChange}
                      checked={selectedDepartments.includes(dept.id)}
                      className="accent-blue-600"
                    />
                    <label
                      htmlFor={dept.id}
                      className="text-blue-800 font-medium"
                    >
                      {dept.name}
                    </label>
                  </div>
                ))}
              </form>
            </div>
          </div>

          <div className="flex-1 p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">
              Department Attendance
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 border border-blue-100 rounded-xl p-4 overflow-x-auto">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">
                  Users Attendance
                </h3>
                <table className="min-w-full bg-white text-sm">
                  <thead className="bg-blue-100 text-blue-800 text-left">
                    <tr>
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Username</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Phone</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-blue-50 transition">
                      <td className="py-2 px-4  text-gray-700">
                        {user.fullname}
                      </td>
                      <td className="py-2 px-4 text-gray-700">
                        {user.username}
                      </td>
                      <td className="py-2 px-4 text-gray-700">{user.email}</td>
                      <td className="py-2 px-4 text-gray-700">{user.phone}</td>
                      <td className="py-2 px-4">
                        <div className="flex justify-center items-center text-white bg-blue-300 w-10 h-10 rounded-full hover:text-black"  onClick={() => {setShowDetails(true);}}>
                          <Icon icon="rightarrow"/>
                        </div>
                      </td>
                    </tr>
                  ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
