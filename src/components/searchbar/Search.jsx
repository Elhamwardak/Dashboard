
const Search = ({value, onChange,placeholder = "Search..." }) => {
  return (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 pl-5 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  );
};

export default Search;
