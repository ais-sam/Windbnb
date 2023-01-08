import React from 'react'
import GuestCounter from './GuestCounter'

const GuestFilter = ({className}) => {
  return (
    <div className={`${className} flex flex-col gap-8 justify-between h-full`} >
      <GuestCounter type="adult"/>
      <GuestCounter type="children"/>
    </div>
  )
}

export default GuestFilter