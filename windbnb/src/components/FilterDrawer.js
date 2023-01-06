import React from 'react'
import Input from './Input'
import Button from './Button'
const FilterDrawer = () => {
  return (
    <div className='absolute w-full h-[70vh] bg-white left-0 -top-4 pt-6 '>
      <div className='flex items-center justify-between container gap-4'>
          <Input type='location'/>
          <Input type='guests'/>
          <Button/>
      </div>

    </div>
  )
}

export default FilterDrawer