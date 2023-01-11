import React from 'react'
import Input from './Input'
import Button from './Button'
import LocationFilterResults from './LocationFilterResults'
import GuestsFilter from "./GuestsFilter"
const FilterDrawer = () => {
  return (
    <div className='absolute w-full h-[92vh] sm:h-[70vh]  left-0 -top-4 pt-6 pb-11 bg-slate-500 '>
      <div className='flex items-center justify-between container shadow-sm rounded-2xl'>
        <div className='basis-4/5 flex flex-col sm:flex-row sm:items-center'>
          <Input type='location' className="w-full sm:basis-1/2"/>
          <Input type='guests' className="w-full sm:basis-1/2 "/>
        </div>
          <Button className="hidden sm:flex"/>
      </div>
      <div className='container flex flex-col sm:flex-row  md:items-center gap-4 mt-10 pl-6 sm:pl-0'>
        <LocationFilterResults className="basis-2/5"/>
        <GuestsFilter className="basis-2/5"/>
        <Button className="flex sm:hidden sel self-center w-fit mb-8"/>
        
      </div>

    </div>
  )
}

export default FilterDrawer

// TO DO:
/*
- make the same space for the 02 lines => use (basis-1/3 for each    or   tyr grid)
*/