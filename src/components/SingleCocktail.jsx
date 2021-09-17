import React from "react";
import { NavLink } from "react-router-dom";

const SingleCocktail = ({ cocktail }) => {
  const {
    strDrink: name,
    idDrink: id,
    strDrinkThumb: img,
    strAlcoholic: alcoholic,
  } = cocktail;
  return (
    <>
      <div className="single-cocktail">
        <div className="overflow-hidden">
          <img src={img} alt={name} />
        </div>
        <h6>
          Name: <span className=" name"> {name} </span>
        </h6>
        <small title={`${alcoholic} Drink`}> {alcoholic} </small>
        <NavLink to={`/cocktails/${id}`}>Details</NavLink>
      </div>
    </>
  );
};

export default SingleCocktail;
