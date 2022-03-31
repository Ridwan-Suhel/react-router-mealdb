import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetail.css";
const FoodDetails = () => {
  const { foodId } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals[0]));
  }, []);
  return (
    <div>
      <h2>Food Details</h2>
      <div className="food-card">
        <img src={foods.strMealThumb} alt="food img" />
        <h3>Food Name: {foods.strMeal}</h3>
        <p>{foods.strInstructions}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
