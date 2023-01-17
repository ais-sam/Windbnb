import React, { useState } from 'react'

const GuestCounter = ({type}) => {
  const [adultAge,setAdultAge] = useState(0)
  const [childrenAge,setChildrenAge] = useState(0)

  const addAge = (type)=>{
    if (type ==="adult") {
      setAdultAge(adultAge + 1)
    } else{
      setChildrenAge(childrenAge + 1)
    }
  }
  
  const substractAge = ()=>{
    if (adultAge > 0 || childrenAge > 0) {
      if (type ==="adult") {
        setAdultAge(adultAge - 1)
      } else{
        setChildrenAge(childrenAge - 1)
      }
        
    }
  }
  return (

    <div className='text-muli text-sm'>
        <h4 className='font-bold capitalize'>{type}</h4>
        <span className='text-w-gray-3 font-light mb-2 block'>{type === "adult"?"Ages 13 or above":"Ages 2-12"} </span>
        <div className='flex gap-3'>
            <button className='border border-w-gray-2 rounded-[4px] w-5 h-5 text-w-gray-2' onClick={()=>addAge(type)}>+</button>
            <span>{type === 'adult' ? adultAge : childrenAge}</span>
            <button className='border border-w-gray-2 rounded-[4px] w-5 h-5 text-w-gray-2' onClick={()=>substractAge(type)}>-</button>
        </div>
    </div>
    
  )
}

export default GuestCounter