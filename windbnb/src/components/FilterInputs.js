import React, {useContext} from 'react'
import Input from './Input';
import Button from './Button';
import useGlobal, { GlobalContext } from '../contexts/GlobalContext';

const FilterInputs = () => {
  const {setCities,setGuestFilters} = useContext(GlobalContext)
  return (
    <div className="flex items-center justify-between container shadow-sm rounded-2xl px-2">
      <div className="basis-full md:basis-4/5 md:flex  md:flex-row md:items-center ">
        <Input onClick={()=>setCities(true)} type="location" className="w-full md:basis-1/2 mb-1 md:mb-0" />
        <Input onClick={()=>setGuestFilters(true)} type="guests" className="w-full md:basis-1/2 " />
      </div>
      <Button className="hidden md:flex" />
    </div>
  );
}

export default FilterInputs