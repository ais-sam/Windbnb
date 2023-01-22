import React from 'react'
import EditSearch from './EditSearch'
import FilterDetails from './FilterDetails'
import FilterInputs from './FilterInputs'


const FilterDrawer = () => {
    return (
    <div className="absolute w-full h-[90vh] md:h-[70vh]  left-0 -top-4 pt-6 pb-11 bg-white z-20">
      <EditSearch />
        <FilterInputs />
        <FilterDetails />
    </div>
  );
}

export default FilterDrawer
