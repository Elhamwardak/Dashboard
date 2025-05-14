import { useState } from "react";
import Button from "../components/button/Button";
import Search from "../components/searchbar/Search";
import Table from "../components/table/Table";
import Popup from "../components/popup/popup";
import Input from "../components/input/Input";
import DropdownInput from "../components/dropdowninput/DropDownInput";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const User = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [newUser, setNewUser] = useState({
    fullname: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    role: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    data: users,
    error,
    isLoading,
    mutate,
  } = useSWR("http://localhost:3001/users", fetcher);

  const filteredUsers = users?.filter(
    (user) =>
      user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = async (user) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Basic validation
      if (!user.fullname || !user.email || !user.username || !user.password) {
        throw new Error("Please fill in all required fields.");
      }

      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      await mutate();
      setOpenPopup(false);
      setNewUser({
        fullname: "",
        email: "",
        username: "",
        phone: "",
        password: "",
        role: "",
      });
      setProfilePic(null);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newUser);
  };

  return (
    <>
      <div className="space-y-4 p-10">
        <div className="flex justify-between items-center">
          <div className="max-w-md">
            <Search
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <Button title="Add User" onClick={() => setOpenPopup(true)} />
          </div>
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Failed to load users</p>}
        <Table users={filteredUsers} />
      </div>

      {openPopup && (
        <Popup onClose={() => setOpenPopup(false)}>
          <h2 className="text-lg font-bold mb-4">Add New User</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    value={newUser.username}
                    onChange={handleInput}
                  />
                  <Input
                    label="Full Name"
                    name="fullname"
                    type="text"
                    placeholder="Enter your name"
                    value={newUser.fullname}
                    onChange={handleInput}
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={newUser.email}
                    onChange={handleInput}
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="text"
                    placeholder="Enter your number"
                    value={newUser.phone}
                    onChange={handleInput}
                  />
                </div>
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={newUser.password}
                  onChange={handleInput}
                />
                <DropdownInput
                  name="role"
                  value={newUser.role}
                  onChange={handleInput}
                />
                <Button title="Add" type="submit" disabled={isSubmitting} />
                {submitError && (
                  <p className="text-red-500 mt-2">{submitError}</p>
                )}
              </div>

              <div className="md:col-span-1 space-y-4 flex flex-col items-center">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Preview"
                    className="w-32 h-32 rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
                <label className="inline-block cursor-pointer bg-blue-800 hover:bg-blue-700 text-white hover:text-black hover:bg-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200">
                  Upload image
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>
          </form>
        </Popup>
      )}
    </>
  );
};

export default User;
