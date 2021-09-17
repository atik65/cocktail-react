import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const IndivisualCocktail = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  // const ingredient = [];

  // useEffect(() => {
  //   fetchData();
  // }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strCategory: category,
          strAlcoholic: alcoholic,
          strGlass: glass,
          strInstructions: instruction,
          strDrinkThumb: img,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];

        const ingredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const cocktail = {
          name,
          category,
          alcoholic,
          glass,
          instruction,
          img,
          ingredient,
        };
        setCocktail(cocktail);
      } else {
        setCocktail(null);
        console.log(" no drink");
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("data fetching error from indivusal");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner-grow" role="status"></div>
      </div>
    );
  }

  if (!cocktail) {
    return (
      <h2
        className="text-center bg-dark text-light "
        style={{ height: "calc( 100vh - 68px )" }}
      >
        No info about this id - {id}
      </h2>
    );
  }

  const { name, category, alcoholic, glass, instruction, img, ingredient } =
    cocktail;

  // console.log(cocktail?.cocktail?.name + "   atik ");

  return (
    <>
      <div className="indivisual">
        <section>
          <div className="py-3 d-flex justify-content-between  ">
            <NavLink className=" back-button" to="/cocktails">
              Go to Cocktails <i className="fas fa-arrow-right    "></i>
            </NavLink>
            <NavLink className=" back-button" to="/">
              <i className="fas fa-arrow-left    "></i> Go to Home
            </NavLink>
          </div>
          <div className="text-center">
            <img src={img} alt={name} />
          </div>
          <h2> {name} </h2>
          <div className="cock-info">
            <h6> Category: {category} </h6>
            <h6> It is {alcoholic} </h6>
            <h6> Glass Type: {glass} </h6>
          </div>
          <h5 className="text-primary"> Ingredients: </h5>{" "}
          {ingredient.map((ing, index) =>
            ing ? (
              <span key={index}>
                {" "}
                {index + 1}. {ing}{" "}
              </span>
            ) : null
          )}
          <p>
            {" "}
            <span className="text-danger px-0">Instruction:</span> {instruction}{" "}
          </p>
        </section>
      </div>
    </>
  );
};

export default IndivisualCocktail;
