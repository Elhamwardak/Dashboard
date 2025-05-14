import ClientBox from "../components/clientbox/ClientBox";
import Search from "../components/searchbar/Search";

const Customers = () => {

  return (
    <>
      <div className="space-y-4 p-4">
        <div className="max-w-xs">
          <Search />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          <ClientBox name="Ahmad" position="App Developer"/>
          <ClientBox name="Mahmood" position="IT"/>
          <ClientBox name="Shaheer" position="Software Developer"/>
          <ClientBox name="Samim" position="Manager"/>
          <ClientBox name="Sadid" position="Developer"/>
          <ClientBox name="Elham" position="CEO"/>
        </div>
      </div>
    </>
  );
};

export default Customers;
