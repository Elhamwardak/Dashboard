import UserImage from "../../assets/userimage.png";
import Icon from "../icons/Icons";

const ClientBox = (props) => {
  return (
    <>
      <div className="flex flex-col py-10 items-center justify-center p-4 shadow-md space-y-2 rounded-md">
        <img
          src={UserImage}
          alt="User profile"
          className="w-15 h-15 rounded-full"
        />
        <h3 className="text-lg font-semibold mt-2 text-gray-700">{props.name}</h3>
        <span className="text-sm text-gray-500">{props.position}</span>
        <div className="flex text-sm mt-2 gap-2 text-white">
          <div className="flex justify-center items-center w-7 h-7 bg-blue-600 rounded-full">
            <Icon icon="phone" />
          </div>
          <div className="flex justify-center items-center w-7 h-7 bg-blue-600 rounded-full">
            <Icon icon="email" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientBox;
