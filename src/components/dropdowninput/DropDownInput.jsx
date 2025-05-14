
function DropdownInput(props) {
  return (
    <>
      <div className="w-full">
        <label className="block text-sm font-normal text-gray-600">Select Role</label>
        <select
        name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 placeholder:text-sm"
        >
          <option value="" className="text-gray-600 text-sm">Choose a role</option>
          <option value="User" className="text-sm">User</option>
          <option value="Superadmin" className="text-sm">SuperAdmin</option>
        </select>
      </div>
    </>
  );
}

export default DropdownInput;
