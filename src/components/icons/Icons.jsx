import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faUsersLine,
  faBiohazard,
  faStore,
  faUserGroup,
  faBucket,
  faArchway,
  faPhone,
  faEnvelope,
  faBars,
  faArrowRightFromBracket,
  faUser,
  faArrowLeft,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ icon, onClick }) => {
  const icons = {
    dashboard: faGaugeHigh,
    customers: faUsersLine,
    menu: faBiohazard,
    order: faStore,
    usergroup: faUserGroup,
    bucket: faBucket,
    archawy: faArchway,
    phone: faPhone,
    email: faEnvelope,
    FaBars: faBars,
    logout:faArrowRightFromBracket,
    user:faUser,
    department:faStore,
    back:faArrowLeft,
    attendance:faUsers
  };

  return (
    <FontAwesomeIcon
      icon={icons[icon]}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};

export default Icon;
