import { useState } from "react";
import BarChart from "../components/barchart/BarChart";
import DoughnutChart from "../components/doughnutchart/DoughnutChart";
import Card from "../components/card/Card";
import LineChart from "../components/linechart/LineChart";
import Table from "../components/table/Table";
import Search from "../components/searchbar/Search";
import Attendance from "../attendance/Attendance";
import Button from "../components/button/Button";
import Icon from "../components/icons/Icons";

const Hero = () => {
  const [showAttendance, setShowAttendance] = useState(false);

  if (showAttendance) {
    return <Attendance onBack={() => setShowAttendance(false)} />;
  }

  return (
    <>
      <div className="space-y-4 p-4">
        <div title="Attendance" className="absolute bottom-10 z-10 right-10 w-12 h-12 flex justify-center items-center  mb-4 text-white hover:border bg-blue-600  px-3 py-1 rounded-full hover:bg-white hover:text-blue-600 hover:border-blue-600 transition" onClick={() => setShowAttendance(true)}>
          <Icon icon="attendance" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Card title="Reserved" value="8" percentage="2.7" icon="bucket" />
          <Card title="Rooms" value="10" percentage="4" icon="archawy" />
          <Card title="Clients" value="56" percentage="-3" icon="usergroup" />
          <Card title="Projects" value="76" percentage="25" icon="dashboard" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-4">
          <div className="bg-white shadow p-4 sm:col-span-12 lg:col-span-12 mb-5 pb-10 relative">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Monthly Booking Trends
            </h2>
            <LineChart />
          </div>

          <div className=" shadow p-4 bg-white sm:col-span-6 lg:col-span-6 pb-10">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Monthly Revenue
            </h2>
            <BarChart />
          </div>

          <div className="bg-white sm:col-span-6 shadow p-5 pb-10  lg:col-span-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-700 ">
              Office Analytics
            </h2>
            <DoughnutChart />
          </div>
        </div>
        <div className="w-full max-w-md">
          <Search />
        </div>
        <Table />
      </div>
    </>
  );
};

export default Hero;
