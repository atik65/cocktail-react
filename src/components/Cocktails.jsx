import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";
import CocktailsList from "./CocktailsList";

const Cocktails = () => {
  const ref = useRef(null);

  const { searchTerm, setSearchTerm } = useGlobalContext();

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <div className="cocktails">
        <section className="search-tab">
          <div className="form-group d-flex flex-column">
            <input
              ref={ref}
              type="text"
              className="form-control form-control-sm bg-dark text-light"
              placeholder="search vodka / gin / rum etc"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <small className="text-success">Search Cocktail by Name</small>
          </div>
        </section>
        {/* cocktails list will appear here  */}
        <CocktailsList />
      </div>
    </>
  );
};

export default Cocktails;
