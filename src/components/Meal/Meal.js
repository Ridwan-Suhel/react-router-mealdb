import React from "react";
import "./Meal.css";
const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <div className="single-box">
      <img src={strMealThumb} alt="img of meal" />
      <h3>Meal Name: {strMeal}</h3>
      <p>Instruction: {strInstructions.slice(0, 100)}</p>
      <button className="detail-btn">Detail Food</button>
    </div>
  );
};

export default Meal;
