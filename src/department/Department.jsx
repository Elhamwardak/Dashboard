import Search from "../components/searchbar/Search";
import Button from "../components/button/Button";
import Popup from "../components/popup/popup";
import Input from "../components/input/Input";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import Table from "../components/table/Table";
import { useSearch } from "../context/SearchContext";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Department = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [departmentData, setDepartmentData] = useState({
    name: "",
    details: "",
    numberOfEmployees: "",
    salaryCount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    data: departments,
    error,
    isLoading,
  } = useSWR("http://localhost:3001/departments", fetcher);

  const { searchQuery } = useSearch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDepartmentData({ ...departmentData, [name]: value });
  };

  const addDepartment = async (department) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Basic validation
      if (
        !department.name ||
        !department.details ||
        !department.numberOfEmployees ||
        !department.salaryCount
      ) {
        throw new Error("Please fill in all required fields.");
      }

      const response = await fetch("http://localhost:3001/departments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(department),
      });
      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      setOpenPopup(false);
      setDepartmentData({
        name: "",
        details: "",
        numberOfEmployees: "",
        salaryCount: "",
      });
      mutate("http://localhost:3001/departments");
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDepartment(departmentData);
  };

  const columns = [
    { header: "Department Name", accessor: "name" },
    { header: "Details", accessor: "details" },
    { header: "Number of Employees", accessor: "numberOfEmployees" },
    { header: "Salary Count", accessor: "salaryCount" },
  ];

  const filteredDepartments = departments
    ? [...departments]
    .reverse()
    .filter(
        (dept) =>
          dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dept.details.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <div className="space-y-4 p-10">
        <div className="flex justify-between items-center">
          <div className="max-w-md">
            <Search />
          </div>
          <div>
            <Button title="Add Department" onClick={() => setOpenPopup(true)} />
          </div>
        </div>

        {isLoading && <p>Loading departments...</p>}
        {error && <p className="text-red-500">Failed to load departments</p>}

        {filteredDepartments && filteredDepartments.length > 0 ? (
          <Table columns={columns} data={filteredDepartments} title="Department"/>
        ) : (
          <p>No departments found.</p>
        )}

        {openPopup && (
          <Popup onClose={() => setOpenPopup(false)}>
            <h2 className="text-lg font-bold mb-4">Add Department</h2>
            <form action="" onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Department Name"
                name="name"
                type="text"
                placeholder="Enter department name"
                value={departmentData.name}
                onChange={handleInput}
              />
              <Input
                label="Details"
                name="details"
                type="text"
                placeholder="Enter details"
                value={departmentData.details}
                onChange={handleInput}
              />
              <Input
                label="Number of Employees"
                name="numberOfEmployees"
                type="number"
                placeholder="Enter number of employees"
                value={departmentData.numberOfEmployees}
                onChange={handleInput}
              />
              <Input
                label="Salary Count"
                name="salaryCount"
                type="number"
                placeholder="Enter salary count"
                value={departmentData.salaryCount}
                onChange={handleInput}
              />
              <Button
                type="submit"
                title="Add Department"
                disabled={isSubmitting}
              />
              {submitError && (
                <p className="text-red-500 mt-2">{submitError}</p>
              )}
            </form>
          </Popup>
        )}
      </div>
    </>
  );
};

export default Department;
