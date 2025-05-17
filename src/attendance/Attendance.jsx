import Icon from "../components/icons/Icons";
import PieChart from "../components/pichart/PieChart";
import { useState, useEffect } from "react";

const Attendance = ({ onBack }) => {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const departments = [
    { id: "d273", name: "H4" },
    { id: "c2fb", name: "It" },
    { id: "29e1", name: "Software Development" },
  ];

  const users = [
    {
      id: "1",
      fullname: "Ali Khan",
      departmentId: "Software User",
    },
    {
      id: "26fe",
      fullname: "IT user", 
      departmentId: "c2fb",
    },
    {
      id: "326b",
      fullname: "h4 user",
      departmentId: "d273",
    },
  ];

  useEffect(() => {
    const result = users.filter((user) =>
      selectedDepartments.includes(user.departmentId)
    );
    setFilteredUsers(result);
  }, [selectedDepartments]);

  const handleDepartmentChange = (e) => {
    const { id, checked } = e.target;
    setSelectedDepartments((prev) =>
      checked ? [...prev, id] : prev.filter((deptId) => deptId !== id)
    );
  };

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

          <div class="flex-1 p-6 bg-white rounded-2xl shadow-md">
            <h2 class="text-2xl font-semibold text-blue-800 mb-6">
              Department Attendance
            </h2>

            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex-1 border border-blue-100 rounded-xl p-4 overflow-x-auto">
                <h3 class="text-lg font-semibold text-blue-700 mb-4">
                  Users Attendance
                </h3>
                <table class="min-w-full bg-white text-sm">
                  <thead class="bg-blue-100 text-blue-800 text-left">
                    <tr>
                      <th class="py-3 px-4">Name</th>
                      <th class="py-3 px-4 text-center">Present</th>
                      <th class="py-3 px-4 text-center">Absent</th>
                      <th class="py-3 px-4 text-center">Late</th>
                    </tr>
                  </thead>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-blue-50 transition">
                      <td className="py-2 px-4 font-medium text-gray-700">
                        {user.fullname}
                      </td>
                      <td className="py-2 px-4 text-center text-green-600 font-semibold">
                        20
                      </td>
                      <td className="py-2 px-4 text-center text-red-500 font-semibold">
                        5
                      </td>
                      <td className="py-2 px-4 text-center text-yellow-500 font-semibold">
                        2
                      </td>
                    </tr>
                  ))}
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
