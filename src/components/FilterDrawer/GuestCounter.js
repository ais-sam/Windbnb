import React from 'react'
import useGlobal from '../../contexts/GlobalContext'
import { types } from '../../reducer/types'

const GuestCounter = ({type,guests}) => {
  const { INCREMENT_ADULTS,DECREMENT_ADULTS,INCREMENT_CHILDREN,DECREMENT_CHILDREN}= types
  const {state,dispatch} = useGlobal()
  const {numberOfAdult,numberOfChildren} = state
  const addGuest = (type)=>{
    if ((numberOfAdult + numberOfChildren) < guests ) {
      if (type ==="adult") {
        dispatch({type:INCREMENT_ADULTS,payload:numberOfAdult+1})
      } else{
        dispatch({type:INCREMENT_CHILDREN,payload:numberOfChildren+1})
      }
      
    }
  }
  
  const substractGuest = (type)=>{
    if (type ==="adult" && numberOfAdult > 0 ) {
      dispatch({type:DECREMENT_ADULTS,payload:numberOfAdult-1})
    } else if(type === "children" && numberOfChildren > 0){
      dispatch({type:DECREMENT_CHILDREN,payload:numberOfChildren-1})

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