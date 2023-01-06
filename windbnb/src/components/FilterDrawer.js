import React from 'react'
import Input from './Input'
import Button from './Button'
import LocationFilterResults from './LocationFilterResults'
import GuestsFilter from "./GuestsFilter"
const FilterDrawer = () => {
  return (
    <div className='absolute w-full h-[70vh] bg-white left-0 -top-4 pt-6 '>
      <div className='flex items-center justify-between container gap-4 shadow-sm rounded-2xl'>
          <Input type='location'/>
          <Input type='guests'/>
          <Button className="hidden md:flex"/>
      </div>
      <div className='container flex items-center justify-between gap-4'>
        <LocationFilterResults/>
        <GuestsFilter/>
        <Button className="md:hidden"/>
      </div>

    </div>
  )
}

export default FilterDrawer