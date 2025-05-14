import MyComponent from "../components/progresscircle/ProgressCircle";
import Search from "../components/searchbar/Search";
import Table from "../components/table/Table";

const Order = () => {
  return (
    <>
      <div className="space-y-4 p-4">
        <div className="flex flex-col item-center justify-between p-10 shadow-md">
          <h3 className="font-semibold mb-12 border-b-1 border-gray-200 h-10 ">Weekly Reports</h3>
          <div className="flex justify-between items-center">
            <MyComponent percentage="70" label="Rooms reserved"/>
            <MyComponent percentage="90" label="Exsiting Rooms"/>
            <MyComponent percentage="50" label="Project"/>
            <MyComponent percentage="60" label="Services"/>
          </div>
        </div>
        <div className="max-w-md">
          <Search />
        </div>
        <Table />
      </div>
    </>
  );
};

export default Order;
