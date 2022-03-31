import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Meal.css";
const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal;
  const navigate = useNavigate();
  const foodDetails = () => {
    const path = `/meal/${idMeal}`;
    navigate(path);
  };

  return (
    <div className="single-box">
      <img src={strMealThumb} alt="img of meal" />
      <h3>Meal Name: {strMeal}</h3>
      <p>Instruction: {strInstructions.slice(0, 100)}</p>
      <button className="detail-btn" onClick={foodDetails}>
        Food Detail - {idMeal}
      </button>
      <Link className="details-link" to={`/meal/${idMeal}`}>
        Food Details
      </Link>
    </div>
  );
};

export default Meal;
