import { createContext, useState,useContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState();
  const value = { location, setLocation, guests, setGuests };

  return (
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>
  )

};

export const useFilterContext = ()=>{
    const context = useContext(FilterContext)
    if (context === undefined) {
        throw new Error("useGlobal must be used within GlobalContext")
    }
    return context
}
