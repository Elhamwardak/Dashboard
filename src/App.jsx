import Navbar from "./components/navbar/Navbar";
import Icon from "./components/icons/Icons";
import Hero from "./pages/Hero";
import Order from "./pages/Order";
import Menus from "./pages/Menus";
import Customers from "./pages/Customers";
import User from "./user/User";
import Deparment from './department/Department'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const isMdUp = useMediaQuery({ query: "(min-width: 992px)" });

  const renderContent = () => {
    switch (activeTab) {
      case "User":
        return <User/>
      case "Deparment":
        return <Deparment/>
      case "Rooms":
        return <Order />;
      case "Reservation":
        return <Menus />;
      case "Clients":
        return <Customers />;
      default:
        return <Hero />;
    }
  };

  useEffect(() => {
    if (!isMdUp) {
      setIsOpen(false);
    }
  }, [isMdUp]);

  const toggleSidebar = () => {
    if (isMdUp) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <motion.aside
          initial={{ width: 70 }}
          animate={{ width: isOpen ? 240 : 70 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-100 pl-2 z-10 pt-6 relative"
        >
          <button
            className="hidden lg:block z-30 mb-6 ml-2 absolute right-[-0.95rem] top-10 bg-gray-100 rounded-full px-2 py-3"
            onClick={toggleSidebar}
          >
            <Icon icon="FaBars" />
          </button>

          <div className="w-full flex items-center gap-3 mb-6 pl-2">
            <div className="w-10 h-10 bg-blue-200 border border-blue-500 rounded-full flex items-center justify-center">
              <h1 className="text-black font-extrabold">A</h1>
            </div>
            {isOpen && <h1 className="font-bold uppercase">Aria Delta</h1>}
          </div>

          <ul className="space-y-3">
            {[
              { tab: "dashboard", label: "Dashboard", icon: "dashboard" },
              { tab: "User", label: "User", icon: "user" },
              { tab: "Deparment", label: "Department", icon: "department" },
              { tab: "Rooms", label: "Rooms", icon: "order" },
              { tab: "Reservation", label: "Reservations", icon: "menu" },
              { tab: "Clients", label: "Clients", icon: "customers" },
            ].map(({ tab, label, icon }) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-x-2 cursor-pointer px-3 py-2 transition rounded-l-full ${
                  activeTab === tab ? "bg-white text-black" : ""
                } ${isOpen ? "" : "justify-center"}`}
              >
                <div
                  className={`flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? ""
                      : "px-1 py-2 "
                  }`}
                >
                  <Icon icon={icon}/>

                </div>
                {isOpen && (
                  <span className="whitespace-nowrap text-sm font-medium">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.aside>

        <main className="flex-1 overflow-auto bg-white" onClick={() => isMdUp && setIsOpen(false)}>
          <Navbar title={activeTab} />
          {renderContent()}
        </main>
      </div>
    </>
  );
}

export default App;
