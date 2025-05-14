import userPhoto from "../../assets/user.JPG";
import Icon from "../icons/Icons";

const Navbar = (props) => {
  return (
    <div className="flex justify-between items-center px-3 border-b border-gray-200 bg-white">
      <h2 className="font-bold text-xl">{props.title}</h2>

      <div className="flex items-center gap-6  px-4 py-2 rounded">
        <div className="flex items-center gap-4">
          <p className="font-semibold text-lg hidden sm:block">Elham Wardak</p>
          <img
            src={userPhoto}
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <button title="logout" className="font-semibold bg-blue-600 text-white px-3 py-2 rounded-full shadow hover:bg-blue-800 hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">
          <Icon icon="logout" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
