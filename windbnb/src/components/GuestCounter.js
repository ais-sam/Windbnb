import React from 'react'

const GuestCounter = ({type}) => {
  return (

    <div className='text-muli text-sm'>
        <h4 className='font-bold capitalize'>{type}</h4>
        <span className='text-w-gray-3 font-normal'>{type === "adult"?"Ages 13 or above":"Ages 2-12"} </span>
        <div className='flex gap-3'>
            <button className='border border-w-gray-2 rounded-[4px] w-5 h-5 text-w-gray-2'>+</button>
            <span>0</span>
            <button className='border border-w-gray-2 rounded-[4px] w-5 h-5 text-w-gray-2'>-</button>
        </div>
    </div>
    
  )
}

export default GuestCounter