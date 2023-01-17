import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext';
import Button from './Button';
import GuestsFilter from "./GuestsFilter"
import LocationFilters from "./LocationFilters"

const FilterDetails = () => {
    const {isCities,isGuestFilters} = useContext(GlobalContext)
  return (
    <div className="container flex flex-col md:flex-row  md:items-center gap-4 mt-10 pl-6 md:pl-0">
      {isCities && <LocationFilters className="basis-2/5" />}
      {isGuestFilters && <GuestsFilter className="basis-2/5" />}
      <Button className="flex md:hidden sel self-center w-fit mb-8" />
    </div>
  );
}

export default FilterDetails