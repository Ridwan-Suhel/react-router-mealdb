import React from "react";
import { Link } from "react-router-dom";
import "./Meal.css";
const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;

  return (
    <div className="single-box">
      <img src={strMealThumb} alt="img of meal" />
      <h3>Meal Name: {strMeal}</h3>
      <p>Instruction: {strInstructions.slice(0, 100)}</p>
      {/* <button className="detail-btn" onClick={foodDetails}>Detail Food</button> */}
      <Link className="details-link" to={`/meal/${idMeal}`}>
        Food Details
      </Link>
    </div>
  );
};

export default Meal;
