import React, { createContext, useState } from 'react'
import EditSearch from './EditSearch'
import FilterDetails from './FilterDetails'
import FilterInputs from './FilterInputs'

export const filterContext = createContext()

const FilterDrawer = () => {
  const [city,setCity] = useState()
  const [guests,setGuests] = useState()
  const value = {city,setCity,guests,setGuests}
  return (
    <div className="absolute w-full h-[98vh] md:h-[70vh]  left-0 -top-4 pt-6 pb-11 bg-white z-20">
      <EditSearch />
      <filterContext.Provider value={value}>
        <FilterInputs />
        <FilterDetails />
      </filterContext.Provider>
    </div>
  );
}

export default FilterDrawer
