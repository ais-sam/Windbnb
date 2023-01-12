import React from 'react'
import Input from './Input'
import Button from './Button'
import LocationFilterResults from './LocationFilterResults'
import GuestsFilter from "./GuestsFilter"
import EditSearch from './EditSearch'
const FilterDrawer = () => {
  return (
    <div className='absolute w-full h-[98vh] md:h-[70vh]  left-0 -top-4 pt-6 pb-11 bg-white'>
     <EditSearch/>
      <div className='flex items-center justify-between container shadow-sm rounded-2xl px-2'>
        <div className='basis-full md:basis-4/5 md:flex  md:flex-row md:items-center '>
          <Input type='location' className="w-full md:basis-1/2 mb-1 md:mb-0"/>
          <Input type='guests' className="w-full md:basis-1/2 "/>
        </div>
          <Button className="hidden md:flex"/>
      </div>
      <div className='container flex flex-col md:flex-row  md:items-center gap-4 mt-10 pl-6 md:pl-0'>
        <LocationFilterResults className="basis-2/5"/>
        <GuestsFilter className="basis-2/5"/>
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