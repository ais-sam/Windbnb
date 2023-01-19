import React from 'react'
import { useFilterContext } from '../contexts/FilterContext'
import GuestCounter from './GuestCounter'

const GuestFilter = ({className}) => {
  const {guests, setGuests} = useFilterContext()
  return (
    <div className={`${className} flex flex-col gap-8 justify-between h-full`} >
      <GuestCounter guests={guests} type="adult"/>
      <GuestCounter guests={guests} type="children"/>
    </div>
  )
}

export default GuestFilter