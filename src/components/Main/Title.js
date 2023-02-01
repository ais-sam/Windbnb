import React from 'react'
import useGlobal from '../../contexts/GlobalContext'


const Title = ({stays}) => {
  const {state} = useGlobal()
  const country =state.choosedLocation? state.choosedLocation.split(',')[1].trim(): "Finland"
  return (
    <div className="font-montserrat flex items-center justify-between">
    <h1 className='text-lg font-bold '>Stays in {country}</h1>
    <div className='text-sm'>
      <span>{stays}</span> stays
    </div>
  </div>
  )
}

export default Title