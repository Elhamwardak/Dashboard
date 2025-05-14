import Icon from "../icons/Icons";
import backgroundImage from "../../assets/wave.svg";

const Card = (props) => {
  return (
    <div
      className="bg-gray-100 rounded-2xl shadow-lg p-4 sm:p-6 flex justify-between h-36 sm:h-40 w-full max-w-full sm:max-w-md"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
      }}
    >
      <div className="text-gray-800">
        <h3 className="text-xl sm:text-2xl font-extrabold">{props.value}</h3>
        <span className="text-sm sm:text-md font-medium opacity-80">
          {props.title}
        </span>
        <p className="text-xs sm:text-sm text-green-600 mt-1">
          ▲ {props.percentage}%
        </p>
      </div>

      <div className="z-10 text-blue-400 text-4xl sm:text-3xl">
        <Icon icon={props.icon} />
      </div>
    </div>
  );
};

export default Card;
