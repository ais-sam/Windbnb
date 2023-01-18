import React from 'react'
import { FilterProvider } from '../contexts/FilterContext'
import EditSearch from './EditSearch'
import FilterDetails from './FilterDetails'
import FilterInputs from './FilterInputs'


const FilterDrawer = () => {
    return (
    <div className="absolute w-full h-[98vh] md:h-[70vh]  left-0 -top-4 pt-6 pb-11 bg-white z-20">
      <EditSearch />
      <FilterProvider>
        <FilterInputs />
        <FilterDetails />
      </FilterProvider>
    </div>
  );
}

export default FilterDrawer
