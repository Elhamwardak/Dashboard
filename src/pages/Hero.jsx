import BarChart from "../components/barchart/BarChart";
import PiChart from "../components/pichart/PiChart";
import Card from "../components/card/Card";
import LineChart from "../components/linechart/LineChart";
import Table from "../components/table/Table";
import Search from "../components/searchbar/Search";

const Hero = () => {
  return (
    <>
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Card title="Reserved" value="8" percentage="2.7" icon="bucket" />
          <Card title="Rooms" value="10" percentage="4" icon="archawy" />
          <Card title="Clients" value="56" percentage="-3" icon="usergroup" />
          <Card title="Projects" value="76" percentage="25" icon="dashboard" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-4">
          <div className="bg-white shadow p-4 sm:col-span-12 lg:col-span-12 mb-5 pb-10">
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
            <PiChart />
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
