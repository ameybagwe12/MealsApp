import { createContext, useState } from "react";
// to pass data without using props

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
}); // data to be passed

export default function FavouritesContextProvider({ children }) {
  const [FavouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    // to add new id to favourites id
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  // to remove favourite id
  function removeFavourite(id) {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: FavouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
