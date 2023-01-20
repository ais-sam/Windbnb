import React from 'react'
import useGlobal from '../contexts/GlobalContext'
import GuestCounter from './GuestCounter'

const GuestFilter = ({className}) => {
  const {guests} = useGlobal()
  return (
    <div className={`${className} flex flex-col gap-8 justify-between h-full`} >
      <GuestCounter guests={guests} type="adult"/>
      <GuestCounter guests={guests} type="children"/>
    </div>
  )
}

export default GuestFilter