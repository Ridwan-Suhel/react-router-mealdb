import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Restaurent.css";
const Restaurent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTxt}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchTxt]);
  const searchFood = (e) => {
    setSearchTxt(e.target.value);
  };
  return (
    <div>
      <h2>Find the food here</h2>
      <div>
        <input type="text" onChange={searchFood} />
        <button>Search</button>
      </div>
      <h2>We Found {meals.length} Items</h2>
      <div className="container">
        <div className="meal-wrapper">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurent;
