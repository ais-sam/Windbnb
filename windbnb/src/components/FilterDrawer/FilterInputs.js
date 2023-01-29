import React, { useContext } from 'react';

import useGlobal, { GlobalContext } from '../../contexts/GlobalContext';
import { types } from '../../reducer/types';
import Button from './Button';
import Input from './Input';

const {SHOW_CITIES,HIDE_CITIES,SHOW_GUEST_FILTERS,HIDE_GUEST_FILTERS,CLOSE_MODAL,CHOOSE_TOTAL_GUESTS,SET_LOCATION} = types
const FilterInputs = () => {
  const {dispatch,state,setCities,setGuestFilters,setLocation,guests, setGuests,setChoosedLocation,setModal,setTotalGuests} = useContext(GlobalContext)
  const {location} = state
  // show locations
  const showLocations = ()=>{
    dispatch({type:SHOW_CITIES})
    dispatch({type:HIDE_GUEST_FILTERS})
    // setCities(true)
    // setGuestFilters(false)
  }
  
  // show guest filters
  const showGuestFilters = ()=>{
    dispatch({type:SHOW_GUEST_FILTERS})
    dispatch({type:HIDE_CITIES})
    // setGuestFilters(true)
    // setCities(false)
  }

  const handleChange = (e,type)=>{
    const {value} = e.target
    if (type ==="location") {
      dispatch({type:SET_LOCATION,payload: value})
      // setLocation(value)
    } else if(+value >-1){
      setGuests(value)
    }
  }

  const setFilters = (e)=>{
    e.preventDefault()
    setChoosedLocation(location)
    dispatch({type:CHOOSE_TOTAL_GUESTS,
      payload: guests})
    // setTotalGuests(guests)
    dispatch({type:CLOSE_MODAL})
    // setModal(false)
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