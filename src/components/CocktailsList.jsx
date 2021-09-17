import React from "react";
import { useGlobalContext } from "./Context";
import SingleCocktail from "./SingleCocktail";

const CocktailsList = () => {
  const { cocktailsList, loading, searchTerm } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner-grow" role="status"></div>
      </div>
    );
  }
  return (
    <>
      <section className="cocktail-list">
        {cocktailsList === null ? (
          <h2 className="cocktail-title"> No cocktail Found </h2>
        ) : (
          <h2 className="cocktail-title"> Cocktails </h2>
        )}

        {cocktailsList !== null ? (
          <small className="info">
            Search result for {searchTerm} = {cocktailsList.length}
          </small>
        ) : null}

        <div className="all-cocktail mt-4">
          {cocktailsList?.map((cocktail, index) => (
            <SingleCocktail key={index} cocktail={cocktail} />
          ))}
        </div>
      </section>
    </>
  );
};

export default CocktailsList;
