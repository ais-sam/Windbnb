import React from 'react'
import { useFilterContext } from '../contexts/FilterContext'

const GuestCounter = ({type,guests}) => {
  const {numberOfAdult,setNumberOfAdult,numberOfChildren,setNumberOfChildren } = useFilterContext()

  const addGuest = (type)=>{
    if ((numberOfAdult + numberOfChildren) < guests ) {
      if (type ==="adult") {
        setNumberOfAdult(numberOfAdult + 1)
      } else{
        setNumberOfChildren(numberOfChildren + 1)
      }
      
    }
  }
  
  const substractGuest = (type)=>{
    if (type ==="adult" && numberOfAdult > 0 ) {
      setNumberOfAdult(numberOfAdult - 1)
    } else if(type === "children" && numberOfChildren > 0){
      setNumberOfChildren(numberOfChildren - 1)
    }
  }
  return (

    <div className='text-muli text-sm'>
        <h4 className='font-bold capitalize'>{type}</h4>
        <span className='text-w-gray-3 font-light mb-2 block'>{type === "adult"?"Ages 13 or above":"Ages 2-12"} </span>
        <div className='flex gap-3'>
            <button className='border border-w-gray-2 rounded-[4px] w-5 h-5 text-w-gray-2 flex items-center justify-center' onClick={()=>addGuest(type)}>+</button>
            <span>{type === 'adult' ? numberOfAdult : numberOfChildren}</span>
            <button className='border border-w-gray-2 rounded-[4px] w-5 h-5 text-w-gray-2 flex items-center justify-center' onClick={()=>substractGuest(type)}>-</button>
        </div>
    </div>
    
  )
}

export default GuestCounter