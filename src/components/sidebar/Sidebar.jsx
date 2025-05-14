import React from "react";
import Icon from "../icons/Icons";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `mt-5 mb-2 flex items-center gap-x-2 cursor-pointer px-3 py-3 rounded-l-full rounded-md transition 
    ${isActive ? "bg-white text-black" : ""} hover:bg-white hover:text-black`;

  return (
    <>
      <div className="flex items-center gap-3 px-2 mb-6">
        <div className="w-10 h-10 p-2 rounded-full bg-white flex items-center justify-center shadow-md">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold uppercase">Turkish</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={navLinkClass}>
            <Icon icon="dashboard" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" className={navLinkClass}>
            <Icon icon="order" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={navLinkClass}>
            <Icon icon="menu" /> Menus
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" className={navLinkClass}>
            <Icon icon="customers" /> Customers
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
