import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import Button from './Button';
import GuestsFilter from "./GuestsFilter";
import LocationFilters from "./LocationFilters";


const FilterDetails = () => {
    const {state} = useContext(GlobalContext)
  return (
    <div className="container mt-10 pl-6 md:pl-0">
      <div className='grid grid-cols-12'>
        {state.isCities && <LocationFilters className="col-start-1 col-span-6" />}
        {state.isGuestFilters && <GuestsFilter className="md:pl-[13px] md:col-start-6 col-span-5" />}
      </div>

        <Button className=" absolute bottom-0 left-1/2 -translate-x-1/2  flex md:hidden  w-fit mb-8 mx-auto" />

    </div>
  );
}

export default FilterDetails