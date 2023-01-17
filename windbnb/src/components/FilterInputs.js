import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import Button from './Button';
import Input from './Input';

const FilterInputs = () => {
  const {setCities,setGuestFilters} = useContext(GlobalContext)

  // show locations
  const showLocations = ()=>{
    setCities(true)
    setGuestFilters(false)
  }
  
  // show guest filters
  const showGuestFilters = ()=>{
    setGuestFilters(true)
    setCities(false)
  }

  const handleChange = (e)=>{
    console.log(e.target.value)
  }
  return (
    <div className="flex items-center justify-between container shadow-sm rounded-2xl px-2">
      <div className="basis-full md:basis-4/5 md:flex  md:flex-row md:items-center ">
        <Input onClick={showLocations} onChange={handleChange} type="location" className="w-full md:basis-1/2 mb-1 md:mb-0" />
        <Input onClick={showGuestFilters} type="guests" className="w-full md:basis-1/2 " />
      </div>
      <Button className="hidden md:flex" />
    </div>
  );
}

export default FilterInputs