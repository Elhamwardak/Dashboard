import Search from "../components/searchbar/Search";
import Button from "../components/button/Button";
import { useState, useEffect } from "react";
const Menus = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="max-w-md mx-auto">
          <Search />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {foods.map((food) => (
            <div
              key={food.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
            >
              <img
                src={food.image}
                alt="pizza"
                className="object-cover w-full h-40 rounded-md"
              />

              <div className="mt-3 space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {food.name}
                </h3>
                <p className="text-sm text-gray-500">{food.description}</p>

              <div className="flex items-center justify-between mb-4">

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-600 font-bold">
                    ${food.price}
                  </span>
                </div>

                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-sm">&#9733; &#9733; &#9733; &#9734; &#9734;</span>
                </div>
              </div>
              </div>
              <Button title="Reserve" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menus;
