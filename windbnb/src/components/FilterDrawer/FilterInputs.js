import React, { useContext } from 'react';

import useGlobal, { GlobalContext } from '../../contexts/GlobalContext';
import Button from './Button';
import Input from './Input';

const FilterInputs = () => {
  const {setCities,setGuestFilters,location,setLocation,guests, setGuests,setChoosedLocation,setModal,setTotalGuests} = useContext(GlobalContext)
  // const {location,setLocation,guests, setGuests} = useFilterContext()

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

  const handleChange = (e,type)=>{
    const {value} = e.target
    if (type ==="location") {
      setLocation(value)
      console.log("location", value)
    } else if(+value >-1){
      setGuests(value)
    }
  }

  const setFilters = (e)=>{
    e.preventDefault()
    setChoosedLocation(location)
    setTotalGuests(guests)
    setModal(false)
  }

  return (
    <form onSubmit={setFilters} className="flex items-center justify-between container shadow-sm rounded-2xl px-2">
      <div className="basis-full md:basis-4/5 md:flex  md:flex-row md:items-center ">
        <Input onClick={showLocations} value ={location} onChange={(e)=>handleChange(e,"location")} type="location" className="w-full md:basis-1/2 mb-1 md:mb-0" />
        <Input onClick={showGuestFilters} value={guests || ""} type="guests" onChange={(e)=>handleChange(e,"guests")} className="w-full md:basis-1/2 " />
      </div>
      <Button className="hidden md:flex" />
    </form>
  );
}

export default FilterInputs