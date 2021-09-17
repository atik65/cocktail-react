import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktailsList, setCocktailsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  //   data fetching from api function
  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();
      setCocktailsList(data.drinks);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setCocktailsList(null);
      console.log("data fetching error");
    }
  };

  //   use effect funcion for handle api result with search term
  useEffect(() => {
    FetchData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        cocktailsList,
        loading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
