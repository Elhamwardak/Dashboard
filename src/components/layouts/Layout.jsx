import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = (props) => {
  return (
    <div className="flex h-screen">
      <div className="w-60 hidden lg:block bg-rose-800 pl-6 pt-6 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        <Navbar title={props.title} />
        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
