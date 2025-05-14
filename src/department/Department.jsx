import Search from "../components/searchbar/Search";
import Button from "../components/button/Button";
import Popup from "../components/popup/popup";
import Input from "../components/input/Input";
import { useState } from "react";

const Department = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [departmentData, setDepartmentData] = useState({
    name: "",
    details: "",
    numberOfEmployees: "",
    salaryCount: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDepartmentData({ ...departmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenPopup(false);
    setDepartmentData({
      name: "",
      details: "",
      numberOfEmployees: "",
      salaryCount: "",
    });
  };

  return (
    <>
      <div className="space-y-4 p-6">
        <div className="flex justify-between items-center">
          <div className="max-w-md">
            <Search />
          </div>
          <div>
            <Button title="Add Department" onClick={() => setOpenPopup(true)} />
          </div>
        </div>

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
              <Button type="submit" title="Add Department" />
            </form>
          </Popup>
        )}
      </div>
    </>
  );
};

export default Department;
