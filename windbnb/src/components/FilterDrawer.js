import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Button from './Button'
import EditSearch from './EditSearch'
import FilterInputs from './FilterInputs'
import GuestsFilter from "./GuestsFilter"
import LocationFilterResults from './LocationFilterResults'
const FilterDrawer = () => {
  const {isCities,isGuestFilters} = useContext(GlobalContext)
  
  return (
    <div className='absolute w-full h-[98vh] md:h-[70vh]  left-0 -top-4 pt-6 pb-11 bg-white z-20'>
     <EditSearch/>

      <FilterInputs/>

      <div className='container flex flex-col md:flex-row  md:items-center gap-4 mt-10 pl-6 md:pl-0'>
        {isCities && <LocationFilterResults className="basis-2/5"/>}
        {isGuestFilters && <GuestsFilter className="basis-2/5"/>}
        <Button className="flex md:hidden sel self-center w-fit mb-8"/>
      </div>

    </div>
  )
}

export default FilterDrawer

// TO DO:
/*
- make the same space for the 02 lines => use (basis-1/3 for each    or   tyr grid)
*/